import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { publicAxios } from 'api/axiosConfig';
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_BASE_URL;
let stompClient: Client | null = null;

export const connectWebSocket = ( roomId: string, onMessageReceived: (message: any) => void) => {
    const socket = new SockJS(`${baseURL}/ws/chat`);
    
    stompClient = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000, 
        onConnect: () => {
            console.log('웹소켓 연결 성공');
            stompClient?.subscribe(`/topic/${roomId}`, (message) => {
                onMessageReceived(JSON.parse(message.body));
            });
        },
        onStompError: (frame) => {
            console.error('STOMP Error:', frame);
        }
    });

    stompClient.activate();
};

export const sendMessage = (roomId: string, message: object, updateMessages: (newMessage: any) => void )  => {
    if (!stompClient || !stompClient.connected) {
        console.error("🚨 STOMP Client is not connected.");
        return;
    }

    const newMessage = { ...message, sentAt: new Date().toISOString() };
    updateMessages(newMessage);

    //서버로 메시지 전송
    stompClient.publish({
        destination: `/app/chat/${roomId}`,
        body: JSON.stringify(newMessage),
    });
};

export const disconnectWebSocket = () => {
    if (stompClient) {
        stompClient.deactivate();
        console.log('WebSocket 연결 해제됨');
    }
};
