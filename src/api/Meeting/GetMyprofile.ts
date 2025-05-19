import { privateAxios } from '../axiosConfig';
import { OurTeamResponseType } from 'recoilStores/type/Meeting/ourTeamType'; 

export const getmyProfile = async (
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
