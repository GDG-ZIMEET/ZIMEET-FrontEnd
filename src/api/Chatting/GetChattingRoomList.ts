import { privateAxios } from '../axiosConfig';
import { TeamDetailResponseType } from '../../recoil/type/Chatting/ChattingRoomListType';

export const getchattingRoomList = async (): Promise<TeamDetailResponseType | null> => {
  try {
    const { data } = await privateAxios.get<TeamDetailResponseType>('/chat/rooms/users')
    return data; 
  } catch (error) {
    console.error('Error fetching chatting room list data:', error);
    return null; 
  }
};
