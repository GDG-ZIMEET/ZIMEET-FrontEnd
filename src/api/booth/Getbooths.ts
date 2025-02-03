import axiosInstance from '../axiosConfig';
import { BoothsResponse } from '../../recoil/type/booth';

export const Getbooths = async (place: string): Promise<BoothsResponse | null> => {
  try {
    const { data } = await axiosInstance.get<BoothsResponse>(`/booths/${place}`);
    return data;
  } catch (error) {
    console.error('Error fetching booths data:', error);
    return null;
  }
};