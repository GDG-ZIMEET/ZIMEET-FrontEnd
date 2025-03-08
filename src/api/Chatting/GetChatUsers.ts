import { privateAxios } from '../axiosConfig';
import { TeamDetailResponseType } from '../../recoil/type/Chatting/ChatRoomUsers';

export const getchatUsers = async (
    roomId: number
): Promise<TeamDetailResponseType | null> => {
  try {
    const { data } = await privateAxios.get<TeamDetailResponseType>(`/chat/rooms/${roomId}`); 
    return data;
  } catch (error) {
    console.error('Error fetching chat users:', error);
    return null;
  }
};