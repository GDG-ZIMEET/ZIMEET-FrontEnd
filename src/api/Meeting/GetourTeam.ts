import { privateAxios } from '../axiosConfig';
import { OurTeamResponseType } from 'recoil/type/Meeting/ourTeamType'; 

export const getOurTeam = async (
  teamType: string
): Promise<OurTeamResponseType | null> => {
  try {
    const { data } = await privateAxios.get<OurTeamResponseType>('/meeting/myTeam', {
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
