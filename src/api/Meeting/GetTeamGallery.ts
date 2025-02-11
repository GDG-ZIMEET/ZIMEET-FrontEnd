import { privateAxios } from '../axiosConfig';
import { TeamGalleryResponseType } from '../../recoil/type/Meeting/teamGallery'; 

export const getTeamGallery = async (
  teamType: string,
  page: number
): Promise<TeamGalleryResponseType | null> => {
  try {
    const { data } = await privateAxios.get<TeamGalleryResponseType>('/meeting', {
      params: {
        teamType, 
        page,     
      },
    });
    return data; 
  } catch (error) {
    console.error('Error fetching team gallery data:', error);
    return null; 
  }
};