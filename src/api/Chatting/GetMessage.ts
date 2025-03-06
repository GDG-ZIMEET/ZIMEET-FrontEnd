import { privateAxios } from '../axiosConfig';
import { getMessageResponseType } from '../../recoil/type/Chatting/MessageType';

export const getMessages = async (
    roomId: number,
    page: number,
    size: number
): Promise<getMessageResponseType[] | null> => {
  try {
    const { data } = await privateAxios.get<getMessageResponseType[]>(`/chat/rooms/${roomId}/messages`, {
        params: {
            page,
            size,
        },
    }); 
    return data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    return null;
  }
};