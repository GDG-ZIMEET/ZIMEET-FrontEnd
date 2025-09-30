import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { track } from '@amplitude/analytics-browser';

const baseURL = import.meta.env.VITE_APP_SOCKET_URL;

//채팅방 웹 소켓 서비스
class WebSocketService {
  private client: Client | null = null;

  async connect(chatRoomId: string, onMessage: (message: any) => void, onError?: (error: any) => void) {
    const token = localStorage.getItem('accessToken');

    if (this.client) {
      await this.client.deactivate();
      this.client = null;
    }

    const socket = new SockJS(`${baseURL}/ws`);
    this.client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 1000,
      heartbeatIncoming: 10000,
      heartbeatOutgoing: 10000,
      connectHeaders: { Authorization: `Bearer ${token}` },
      
      onConnect: () => {
        track("[접속]웹소켓_채팅", { roomId: chatRoomId });
        this.client?.subscribe(`/topic/${chatRoomId}`, (frame) => {
          const message = JSON.parse(frame.body);
          onMessage(message);
          track("[수신]웹소켓_채팅", { roomId: chatRoomId });
        });
      },
      
      onStompError: (frame) => {
        console.error('STOMP ERROR:', frame);
        track("[오류]웹소켓_채팅", { error: frame.body });
        if (onError) onError(frame);
      },
      onWebSocketError: (event) => {
        console.error('WEBSOCKET ERROR:', event);
        track("[오류]웹소켓_채팅", { error: event.message });
        if (onError) onError(event);
      },
    });

    this.client.activate();
  }

  sendMessage(destination: string, body: object) {
    if (this.client?.connected) {
      this.client.publish({
        destination,
        body: JSON.stringify(body),
      });
    } else {
      console.warn('WebSocket is not connected.');
    }
  }

  async disconnect() {
    if (this.client) {
      await this.client.deactivate();
      this.client = null;
    }
  }
}

const websocketService = new WebSocketService();
export default websocketService;