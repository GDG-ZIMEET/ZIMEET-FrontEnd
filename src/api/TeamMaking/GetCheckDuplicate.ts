import { privateAxios } from '../axiosConfig';
   
export interface DuplicateResponseType {
status: string;
code: string;
message: string;
data: {
    check: number;
    };
};

export const GetCheckDuplicate = async (
  name : string
): Promise<DuplicateResponseType | null> => {
  try {
    const { data } = await privateAxios.get<DuplicateResponseType>('/meeting/teamName', {
      params: {
        name  
      },
    });
    return data; 
  } catch (error) {
    console.error('Error fetching team gallery data:', error);
    return null; 
  }
};
