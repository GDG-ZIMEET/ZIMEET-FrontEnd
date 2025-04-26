import { privateAxios } from '../axiosConfig';
import { TeamDetailResponseType } from '../../recoilStores/type/Meeting/TeamDetail';

export const getOurTeamDetail = async (
  teamType: string
): Promise<TeamDetailResponseType | null> => {
  try {
    const { data } = await privateAxios.get<TeamDetailResponseType>('/meeting/myTeam/detail', {
      params: {
        teamType  
      },
    });
    return data; 
  } catch (error) {
    console.error('Error fetching team gallery data:', error);
    return null; 
  }
};
