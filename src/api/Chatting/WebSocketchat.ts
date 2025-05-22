import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { track } from '@amplitude/analytics-browser';

const baseURL = import.meta.env.VITE_APP_SOCKET_URL;
const token = localStorage.getItem('accessToken');
let stompClient: Client | null = null;

export const connectWebSocket = ( roomId: string, onMessageReceived: (message: any) => void) => {
    if (stompClient && stompClient.connected) {
        console.warn("WebSocket already connected.");
        return;
    }

    const socket = new SockJS(`${baseURL}/ws`);
     
    stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000, 
        connectHeaders: {
            Authorization: `Bearer ${token}`
        },
        onConnect: () => {
            track("[접속]웹소켓_채팅", { roomId: roomId });
            stompClient?.subscribe(`/topic/${roomId}`, (message) => {
                onMessageReceived(JSON.parse(message.body));
                console.log("Received message:", message.body);
                track("[수신]웹소켓_채팅", { roomId: roomId });
            });
        },
        onWebSocketError: (error) => {
            console.error("WebSocket 오류 발생:", error);
            track("[오류]웹소켓_채팅", { error: error.message });
        },
        onStompError: (frame) => {
            console.error("STOMP 프로토콜 오류:", frame);
            track("[오류]웹소켓_채팅", { error: frame.body });
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

    const newMessage = { ...message, sendAt: new Date().toISOString() };

    //서버로 메시지 전송
    stompClient.publish({
        destination: `/app/chat/${roomId}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newMessage),
    });
    track("[전송]웹소켓_채팅", { roomId: roomId, message: message });
};

export const disconnectWebSocket = () => {
    if (stompClient) {
        stompClient.deactivate();
        stompClient = null;
    }
};