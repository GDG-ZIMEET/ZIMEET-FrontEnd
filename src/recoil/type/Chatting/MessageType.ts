export interface getMessageResponseType {
    id: string;
    type: string;
    roomId: number;
    senderId: number;
    senderName: string;
    content: string;
    sendAt: string;
    emoji: string;
}