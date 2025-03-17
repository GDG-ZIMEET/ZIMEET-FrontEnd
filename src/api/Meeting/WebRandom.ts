import { Client, StompSubscription } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const baseURL = process.env.REACT_APP_SOCKET_URL;
const token = localStorage.getItem("accessToken");
let stompClient: Client | null = null;
let subscription: StompSubscription | null = null; // 구독 추적 변수

export const connectWebSocketRandom = async (handleMatchingStatus: (data: any) => void, matchingId?: number) => {
  if (stompClient && stompClient.connected) {
    console.warn("WebSocket 이미 연결됨.");
    return;
  }

  const socket = new SockJS(`${baseURL}/ws`);
  stompClient = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000,
    connectHeaders: {
      Authorization: `Bearer ${token}`,
    },
    onConnect: async () => {
      try {
        const matchId = matchingId ?? 0;
        await sendMatchingRequest(matchId);

        // 기존 구독이 있으면 해제
        if (subscription) {
          subscription.unsubscribe();
        }

        // 새 구독 설정
        subscription = stompClient?.subscribe(`/topic/matching/${matchId}`, (message) => {
          const data = JSON.parse(message.body);
          handleMatchingStatus(data);
        }) || null;

      } catch (error) {
        console.error("매칭 ID 요청 실패:", error);
      }
    },
    onWebSocketError: (error) => {
      console.error("WebSocket 오류 발생:", error);
    },
    onStompError: (frame) => {
      console.error("STOMP 프로토콜 오류:", frame);
    },
  });

  stompClient.activate();
};

// 참가 요청을 보내는 함수
const sendMatchingRequest = (matchingId: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!stompClient) {
      reject("WebSocket 연결이 없습니다.");
      return;
    }
    
    stompClient.publish({
      destination: "/app/matching/join",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify({ matchingId }),
    });

    resolve(matchingId.toString());
  });
};

// 매칭 취소 함수 (기존 구독도 해제)
export const cancelMatching = () => {
  if (!stompClient) {
    console.warn("WebSocket이 연결되지 않았습니다.");
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
