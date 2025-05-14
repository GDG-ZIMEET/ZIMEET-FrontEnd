import { Client, StompSubscription } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { getRandomNow } from "./GetRandomnow";
import { track } from '@amplitude/analytics-browser';

const baseURL = import.meta.env.VITE_APP_SOCKET_URL;
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
const sendMatchingRequest = async (
  wasCanceledRef: React.MutableRefObject<boolean>
): Promise<{ matchingId: number; userList: any[]; matchingStatus: string } | null> => {
  if (!stompClient) {
    console.error("WebSocket 연결이 없습니다.");
    return null;
  }

  try {
    stompClient.publish({
      destination: "/app/matching/join",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({}),
    });
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let response = await getRandomNow();
  let retryCount = 0;
  let delay = 1000;

    while (!response?.data.matchingId && retryCount < 3) {
      if (wasCanceledRef.current) {
        //매칭 시도취소 
        return null;
      }

      //데이터 가져오기 실패 시 재시도
      await new Promise((resolve) => setTimeout(resolve, delay));
      response = await getRandomNow();
      retryCount++;
      delay *= 2;
    }
  if (!response) {
    //매칭요청 실패 
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
    //WebSocket이 연결되지 않음
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
    //WebSocket이 연결되지 않았습니다.
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
export const startMatchingProcess = async ( 
  setRandomNowData : (data: any) => void,
  wasCanceledRef: React.MutableRefObject<boolean>
) => {
  await connectWebSocketRandom();
  track('[접속]미팅_랜덤_실시간소켓');
  
  // 매칭 참가 요청 후 matchingId 가져오기
  const matchingdata = await sendMatchingRequest(wasCanceledRef);
  if (!matchingdata || wasCanceledRef.current) throw new Error("매칭 실패 또는 취소됨");

  setRandomNowData(matchingdata);
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!wasCanceledRef.current) {
    subscribeToMatching(matchingdata.matchingId, setRandomNowData);
  }
};