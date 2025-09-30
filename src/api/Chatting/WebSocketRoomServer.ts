import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const baseURL = import.meta.env.VITE_APP_SOCKET_URL;
const token = localStorage.getItem('accessToken');

//채팅방 목록 웹 소켓 서비스
class WebSocketRoomService {
  private client: Client | null = null;

  connect(chatRooms: { chatRoomId: string }[], onMessage: (msg: any) => void, onConnectCallback?: () => void) {
    if (this.client) {
      this.client.deactivate();
      this.client = null;
    }
    const socket = new SockJS(`${baseURL}/ws`);
    this.client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 1000,
      connectHeaders: { Authorization: `Bearer ${token}` },
      onConnect: () => {
        chatRooms.forEach((room) => {
          this.client?.subscribe(`/topic/${room.chatRoomId}`, (message) => {
            const msg = JSON.parse(message.body);
            onMessage(msg);
          });
        });
        if (onConnectCallback) onConnectCallback();
      },
      onStompError: (frame) => {
        console.error('STOMP 에러:', frame);
      },
      onWebSocketError: (event) => {
        console.error('WebSocket 에러:', event);
      },
    });
    this.client.activate();
  }

  disconnect() {
    if (this.client) {
      this.client.deactivate();
      this.client = null;
    }
  }
}

const websocketRoomService = new WebSocketRoomService();
export default websocketRoomService;