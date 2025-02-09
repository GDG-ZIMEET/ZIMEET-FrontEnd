import { privateAxios } from '../axiosConfig';
import { OurTeamDetailResponseType } from '../../recoil/type/Meeting/TeamDetail';

export const getOurTeamDetail = async (
  teamType: string
): Promise<OurTeamDetailResponseType | null> => {
  try {
    const { data } = await privateAxios.get<OurTeamDetailResponseType>('/meeting/myTeam/detail', {
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
