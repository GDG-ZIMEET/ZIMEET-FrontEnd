import { privateAxios } from '../axiosConfig';
import { HiResponseType } from '../../recoil/type/Hi/HiType';

export const getsendHi = async (): Promise<HiResponseType | null> => {
  try {
    const { data } = await privateAxios.get<HiResponseType>('/meeting/hiList/send')
    return data; 
  } catch (error) {
    console.error('Error fetching sendHi list data:', error);
    return null; 
  }
};
