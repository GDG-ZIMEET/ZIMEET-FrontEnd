import { privateAxios } from '../axiosConfig';
import { HiResponseType } from '../../recoil/type/Hi/HiType';

export const getreceiveHi = async (): Promise<HiResponseType | null> => {
  try {
    const { data } = await privateAxios.get<HiResponseType>('/meeting/hiList/recevie')
    return data; 
  } catch (error) {
    console.error('Error fetching receiveHi list data:', error);
    return null; 
  }
};
