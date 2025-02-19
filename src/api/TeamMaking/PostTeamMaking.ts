import { privateAxios } from '../axiosConfig';
   
export interface TeamMakeResponseType {
    status: string;
    code: string;
    message: string;
    data: {};
};

export const postTeamMake = async (
  teamType: string,
  name : string,
  teamMember: number[]
): Promise<TeamMakeResponseType | null> => {
  try {
    const { data } = await privateAxios.post<TeamMakeResponseType>(
      `/meeting/myTeam?teamType=${teamType}`, 
      {
        name,
        teamMember
      }
    );
    return data; 
  } catch (error) {
    console.error('Error fetching team gallery data:', error);
    return null; 
  }
};
