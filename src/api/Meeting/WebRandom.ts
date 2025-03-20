import { Client, StompSubscription } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { getRandomNow } from "./GetRandomnow";
import { track } from '@amplitude/analytics-browser';

const baseURL = process.env.REACT_APP_SOCKET_URL;
const token = localStorage.getItem("accessToken");
let stompClient: Client | null = null;
let subscription: StompSubscription | null = null; // 구독 추적 변수

export const connectWebSocketRandom = async () => {
  if (stompClient && stompClient.connected) {
    return;
  }

  return new Promise<void>((resolve, reject) => {
    const socket = new SockJS(`${baseURL}/ws`);
    stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },
      onConnect: async () => {
        resolve();
      },
      onWebSocketError: (error) => {
        console.error("WebSocket 오류 발생:", error);
      },
      onStompError: (frame) => {
        console.error("STOMP 프로토콜 오류:", frame);
      },
    });

    stompClient.activate();
  });
  };

// 참가 요청을 보내는 함수
const sendMatchingRequest = async (): Promise<{ matchingId: number; userList: any[]; matchingStatus: string } | null> => {
  if (!stompClient) {
    console.error("WebSocket 연결이 없습니다.");
    return null;
  }

  try {
    console.log("🛠 매칭 참가 요청 실행 중...");
    stompClient.publish({
      destination: "/app/matching/join",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({}),
    });
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let response = await getRandomNow();
  console.log("response", response);
  let retryCount = 0;
    while (!response?.data.matchingId && retryCount < 3) {
      //console.log(" 매칭 ID를 찾을 수 없음, 재시도 중...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      response = await getRandomNow();
      retryCount++;
    }
  if (!response) {
    //console.error("매칭 데이터를 불러오지 못했습니다.");
    return null;
  }
  return response.data;
} catch (error) {
  console.error("매칭 요청 중 오류 발생:", error);
  return null;
}};

// 매칭 상태 업데이트 및 구독 함수
const subscribeToMatching = (matchingId: number, setRandomNowData: (data: any) => void) => {
  if (!stompClient || !stompClient.connected) {
    //console.error("WebSocket이 연결되지 않음.");
    return;
  }
  // 기존 구독 해제
  if (subscription) {
    subscription.unsubscribe();
  }

  // 새 구독 설정
  subscription = stompClient.subscribe(`/topic/matching/${matchingId}`, (message) => {
    const data = JSON.parse(message.body);
    setRandomNowData(data);
  });
};

// 매칭 취소 함수 (기존 구독도 해제)
export const cancelMatching = () => {
  if (!stompClient) {
    //console.warn("WebSocket이 연결되지 않았습니다.");
    return;
  }
  
  stompClient.publish({
    destination: "/app/matching/cancel",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({}),
  });

  // 기존 구독 해제
  if (subscription) {
    subscription.unsubscribe();
    subscription = null;
  }

  stompClient.deactivate().then(() => {
    stompClient = null;
  });
};

// 매칭 프로세스 시작 함수
export const startMatchingProcess = async ( setRandomNowData : (data: any) => void) => {
  await connectWebSocketRandom();
  track('[접속]미팅_랜덤_실시간소켓');
  // 매칭 참가 요청 후 matchingId 가져오기
  const matchingdata = await sendMatchingRequest();
  if (matchingdata) {
    // matchingId를 알게 되면 구독 시작
    setRandomNowData(matchingdata);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    subscribeToMatching(matchingdata.matchingId , setRandomNowData);
  }
};