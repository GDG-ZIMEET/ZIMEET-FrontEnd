import { privateAxios } from '../axiosConfig';
import { sendHiResponseType } from '../../recoil/type/Hi/sendHiType';

export const getsendHi = async (): Promise<sendHiResponseType | null> => {
  try {
    const { data } = await privateAxios.get<sendHiResponseType>('/meeting/hiList/send')
    return data; 
  } catch (error) {
    console.error('Error fetching sendHi list data:', error);
    return null; 
  }
};
