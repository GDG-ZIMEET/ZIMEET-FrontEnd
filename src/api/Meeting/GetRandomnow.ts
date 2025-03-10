import { RandomNowResponseType } from 'recoil/type/Meeting/RandomNowType';
import { privateAxios } from '../axiosConfig';
   
export const getRandomNow = async (): Promise<RandomNowResponseType | null> => {
  try {
    const { data } = await privateAxios.get<RandomNowResponseType>('/random/matching', {
    });
    return data; 
  } catch (error) {
    console.error('Error fetching random now data:', error);
    return null; 
  }
};
