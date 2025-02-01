import axios from 'axios';
import { BoothDetailResponseType } from '../../recoil/type/booth';

export const GetboothDetail = async (clubId: number): Promise<BoothDetailResponseType | null> => {
  try {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await axios.get<BoothDetailResponseType>(`${baseURL}/booths/detail/${clubId}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Error: Received status code ${response.status}`);
    }
  } catch (error: any) {
    console.error("Error fetching booth detail data:", error.message);
  }
  return null;
};