import axios from 'axios';
import { BoothsResponse } from '../../recoil/type/booth';

export const Getbooths = async (place: string): Promise<BoothsResponse | null> => {
  try {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await axios.get<BoothsResponse>(`${baseURL}/booths/${place}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Error: Received status code ${response.status}`);
    }
  } catch (error: any) {
    console.error("Error fetching booths data:", error.message);
  }
  return null;
};
