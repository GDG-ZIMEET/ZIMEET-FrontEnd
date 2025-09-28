import { privateAxios } from '../axiosConfig';
import { getMessageResponseType } from '../../recoilStores/type/Chatting/MessageType';

export const getMessages = async (
    roomId: number,
    size: number,
    lastMessageTime?: string //마지막으로 메세지 본 시간
): Promise<getMessageResponseType[] | null> => {
  try {
    const params = {
        size,
        lastMessageTime,
    };
    const { data } = await privateAxios.get<getMessageResponseType[]>(`/chat/rooms/${roomId}/messages`, {
        params,
    }); 
    return data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    return null;
  }
};