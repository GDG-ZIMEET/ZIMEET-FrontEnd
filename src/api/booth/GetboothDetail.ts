import axiosInstance from '../axiosConfig';
import { BoothDetailResponseType } from '../../recoil/type/booth';


export const GetboothDetail = async (clubId: number): Promise<BoothDetailResponseType | null> => {
  try {
    const { data } = await axiosInstance.get<BoothDetailResponseType>(`/booths/detail/${clubId}`);
    return data;
  } catch (error) {
    console.error('Error fetching booth detail data:', error);
    return null;
  }
};