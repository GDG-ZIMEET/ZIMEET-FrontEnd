export interface User {
    userId: number;
    name: string;
    emoji: string;
    gender: string;
}
  
export interface ChattingRoomType {
    chatRoomId: number;
    chatRoomName: string;
    latestMessage: string;
    lastestTime: string;
    userProfiles: User[];
}
  
export interface TeamDetailResponseType {
    status: string;
    code: string;
    message: string;
    data: ChattingRoomType[];
}