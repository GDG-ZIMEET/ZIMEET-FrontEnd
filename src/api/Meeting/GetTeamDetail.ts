import { privateAxios } from '../axiosConfig';
import { TeamDetailResponseType } from '../../recoilStores/type/Meeting/TeamDetail';

export const getTeamDetail = async (
  teamId: number
): Promise<TeamDetailResponseType | null> => {
  try {
    const { data } = await privateAxios.get<TeamDetailResponseType>(`/meeting/${teamId}`);
    return data; 
  } catch (error) {
    console.error('Error fetching team gallery data:', error);
    return null; 
  }
};
