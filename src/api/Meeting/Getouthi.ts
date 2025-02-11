import { privateAxios } from '../axiosConfig';
   
export interface HiResponseType {
status: string;
code: string;
message: string;
data: {
    hi: number;
    };
};

export const getOurHi = async (
  teamType: string
): Promise<HiResponseType | null> => {
  try {
    const { data } = await privateAxios.get<HiResponseType>('/meeting/myTeam/hi', {
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
