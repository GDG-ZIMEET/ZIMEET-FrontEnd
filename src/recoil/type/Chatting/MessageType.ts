export interface getMessageResponseType {
    id: string;
    type: 'ENTER' | 'TALK' | 'EXIT';
    roomId: number;
    senderId: number;
    senderName: string;
    content: string;
    sendAt: string;
    emoji: string;
}