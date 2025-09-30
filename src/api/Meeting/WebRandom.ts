import { Client, StompSubscription } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { getRandomNow } from "./GetRandomnow";
import { track } from '@amplitude/analytics-browser';
import * as Sentry from '@sentry/react';
import React from "react";

const baseURL = import.meta.env.VITE_APP_SOCKET_URL;
const token = localStorage.getItem("accessToken");
let stompClient: Client | null = null;
let subscription: StompSubscription | null = null; // 구독 추적 변수
let isConnecting = false;

export const connectWebSocketRandom = async () => {
  if (stompClient && stompClient.connected) {
    return Promise.resolve();
  }

  if (isConnecting) {
    return new Promise<void>((resolve, reject) => {
      const checkConnection = () => {
        if (stompClient && stompClient.connected) {
          resolve();
        } else if (!isConnecting) {
          reject(new Error("Connection failed"));
        } else {
          setTimeout(checkConnection, 100);
        }
      };
      checkConnection();
    });
  }
  isConnecting = true;

  return new Promise<void>((resolve, reject) => {
    let settled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const settle = (fn: (v?: any) => void, arg?: any) => {
      if (settled) return;
      settled = true;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      isConnecting = false;
      fn(arg);
    };

    console.log("SockJS endpoint = ", `${baseURL}/ws`);
    const socket = new SockJS(`${baseURL}/ws`);

    if (stompClient) {
      try {
        stompClient.deactivate();
      } catch (error) {
        console.warn("기존 클라이언트 정리 중 오류:", error);
      }
    }

    stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },
      onConnect: async () => {
        console.log("WebSocket 연결 성공");
        settle(resolve);
      },
      onWebSocketError: (error) => {
        console.error("WebSocket 오류 발생:", error);
        Sentry.captureException(error);
        void stompClient?.deactivate?.();
        settle(reject, error);
      },
      onStompError: (frame) => {
        const err = new Error(`STOMP 오류: ${frame.body}`);
        console.error("STOMP 프로토콜 오류:", frame);
        Sentry.captureException(err);
        void stompClient?.deactivate?.();
        settle(reject, err);
      },
      onDisconnect: () => {
        console.log("WebSocket 연결 해제");
        isConnecting = false;
      },
    });

    try {
      stompClient.activate();
      
      // 타임아웃 추가 (10초)
      timeoutId = setTimeout(() => {
        if (isConnecting) {
          console.warn("WebSocket 연결 시간 초과");
          void stompClient?.deactivate?.();
          settle(reject, new Error("연결 시간 초과"));
        }
      }, 10000);
    } catch (error) {
      settle(reject, error);
    }
  });
};

// 참가 요청을 보내는 함수
const sendMatchingRequest = async (
  wasCanceledRef: React.RefObject<boolean>
): Promise<{ groupId: string; userList: any[]; matchingStatus: string } | null> => {
  if (!stompClient || !stompClient.connected) {
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

    while (!response?.data.groupId && retryCount < 3) {
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
    console.error("매칭 요청 실패");
    return null;
  }
  return response.data;
} catch (error) {
  console.error("매칭 요청 중 오류 발생:", error);
  return null;
}};

// 매칭 상태 업데이트 및 구독 함수
const subscribeToMatching = (groupId: string, setRandomNowData: (data: any) => void) => {
  if (!stompClient || !stompClient.connected) {
    console.error("WebSocket이 연결되지 않았습니다.");
    return false;
  }

  // 기존 구독 해제
  if (subscription) {
    try {
      subscription.unsubscribe();
    } catch (error) {
      console.warn("기존 구독 해제 중 오류:", error);
    }
    subscription = null;
  }

  // 새 구독 설정
  try {
    subscription = stompClient.subscribe(`/topic/matching/${groupId}`, (message) => {
      try {
        const data = JSON.parse(message.body);
        setRandomNowData(data);
      } catch (error) {
        console.error("메시지 파싱 오류:", error);
      }
    });
    
    console.log(`매칭 그룹 ${groupId}에 구독 완료`);
    return true;
  } catch (error) {
    console.error("구독 설정 오류:", error);
    return false;
  }
};

// 매칭 취소 함수 (기존 구독도 해제)
export const cancelMatching = async () => {
  if (!token) {
    console.warn("cancelMatching: 토큰이 없습니다.");
    throw new Error("토큰이 없어 취소 요청을 보낼 수 없습니다.");
  }

  try {
    if (!stompClient || !stompClient.connected) {
      try {
        await connectWebSocketRandom();
      } catch (e) {
        console.warn("cancelMatching: 재연결 실패로 취소 불가", e);
      }
    }
    
    if (stompClient && stompClient.connected) {
      console.log("SockJS cancel -> /app/matching/cancel");
      stompClient.publish({
        destination: "/app/matching/cancel",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({}),
      });
    }
  } catch (error) {
    Sentry.captureException(error);
    console.error("매칭 취소 요청 오류:", error);
  }

  // 기존 구독 해제
  if (subscription) {
    try {
      subscription.unsubscribe();
    } catch (error) {
      console.warn("구독 해제 오류:", error);
    }
    subscription = null;
  }

  // 클라이언트 비활성화
  try {
    await stompClient?.deactivate();
  } catch (error) {
    console.warn("클라이언트 비활성화 오류:", error);
  } finally {
    stompClient = null;
    isConnecting = false;
  }
};

// 매칭 프로세스 시작 함수
export const startMatchingProcess = async ( 
  setRandomNowData : (data: any) => void,
  wasCanceledRef: React.RefObject<boolean>
) => {
  try {
    await connectWebSocketRandom();
    
    if (wasCanceledRef.current) {
      throw new Error("사용자가 취소했습니다.");
    }

    track('[접속]미팅_랜덤_실시간소켓');

    // 매칭 참가 요청 후 groupId 가져오기
    const matchingdata = await sendMatchingRequest(wasCanceledRef);
    
    if (!matchingdata || wasCanceledRef.current) {
      throw new Error("매칭 실패 또는 취소됨");
    }

    setRandomNowData(matchingdata);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!wasCanceledRef.current) {
      const subscribeSuccess = subscribeToMatching(matchingdata.groupId, setRandomNowData);
      if (!subscribeSuccess) {
        throw new Error("구독 설정에 실패했습니다.");
      }
    }
  } catch (error) {
    console.error("매칭 프로세스 오류:", error);
    // 오류 발생 시 정리 작업
    if (!wasCanceledRef.current) {
      await cancelMatching();
    }
    throw error;
  }
};