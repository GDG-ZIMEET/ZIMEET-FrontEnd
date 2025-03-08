import { Client } from "@stomp/stompjs";
import { c } from "framer-motion/dist/types.d-6pKw1mTI";
import SockJS from "sockjs-client";

const baseURL = process.env.REACT_APP_SOCKET_URL;
const token = localStorage.getItem("accessToken");
let stompClient: Client | null = null;

export const connectWebSocketRandom = async (
  onMatchingIdReceived: (matchingId: string) => void, // 매칭 ID 콜백
  onMessageReceived: (message: any) => void // 상태 업데이트 콜백
) => {
  if (stompClient && stompClient.connected) {
    console.warn("WebSocket already 연결됨.");
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
        //참가 요청
        const matchingId = await sendMatchingRequest();
        onMatchingIdReceived(matchingId);

        // 받은 매칭 ID로 구독 시작
        stompClient?.subscribe(`/topic/matching/${matchingId}`, (message) => {
          const updateInfo = JSON.parse(message.body);
          onMessageReceived(updateInfo);
        });
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

//참가 요청을 보내는 함수
const sendMatchingRequest = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!stompClient) {
      reject("WebSocket 연결이 없습니다.");
      return;
    }
    
    // 참가 요청 보내기
    stompClient.publish({
      destination: "/app/matching/join",
      body: JSON.stringify({}), 
    });

    // 서버 응답 
    stompClient.onUnhandledMessage = (message) => {
      try {
        const data = JSON.parse(message.body);
        if (data.matchingId) {
          resolve(data.matchingId); // 매칭 ID
        } else {
          reject("Invalid response: No matchingId found");
        }
      } catch (error) {
        reject(error);
      }
    };
  });
};


//웹소켓 연결 해제 함수
export const disconnectWebSocket = () => {
  if (stompClient) {
    stompClient.deactivate();
    stompClient = null;
    console.log("WebSocket 연결 해제됨");
  }
};

export const cancelMatching = () => {
    if (!stompClient) {
      console.warn("WebSocket이 연결되지 않았습니다.");
      return;
    }
  
    console.log("매칭 취소 요청 전송...");
    
    stompClient.publish({
      destination: "/app/matching/cancel",
      body: JSON.stringify({}), 
    });
  
    // 매칭 취소 후 WebSocket 연결 해제
    disconnectWebSocket();
  };