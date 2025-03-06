import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const baseURL = process.env.REACT_APP_SOCKET_URL;
const token = localStorage.getItem('accessToken');
let stompClient: Client | null = null;

export const connectWebSocket = ( roomId: string, onMessageReceived: (message: any) => void) => {
    if (stompClient && stompClient.connected) {
        console.warn("WebSocket already connected.");
        return;
    }

    const socket = new SockJS(`${baseURL}/ws/chat`);

    stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000, 
        connectHeaders: {
            Authorization: `Bearer ${token}`
        },
        onConnect: () => {
            console.log('✅ WebSocket 연결 성공');
            stompClient?.subscribe(`/topic/${roomId}`, (message) => {
                console.log("📩 수신한 메시지:", message.body);
                onMessageReceived(JSON.parse(message.body));
            });
        },
        onWebSocketError: (error) => {
            console.error("WebSocket 오류 발생:", error);
        },
        onStompError: (frame) => {
            console.error("STOMP 프로토콜 오류:", frame);
        }
    });

    stompClient.activate();
};

export const sendMessage = (roomId: string, message: object )  => {
    if (!stompClient || !stompClient.connected) {
        console.error("STOMP Client is not connected.");
        return;
    }
    if (!roomId) {
        console.error("Invalid roomId:", roomId);
        return;
    }

    const newMessage = { ...message, sentAt: new Date().toISOString() };

    //서버로 메시지 전송
    stompClient.publish({
        destination: `/app/chat/${roomId}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newMessage),
    });
};

export const disconnectWebSocket = () => {
    if (stompClient) {
        stompClient.deactivate();
        console.log('WebSocket 연결 해제됨');
        stompClient = null;
    }
};