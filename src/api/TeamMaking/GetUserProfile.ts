import { privateAxios } from '../axiosConfig';
import { UserResponseType } from '../../recoil/type/TeamMaking/UserType';


export const GetCheckDuplicate = async (
  nickname: string 
): Promise<UserResponseType | null> => {
  try {
    const { data } = await privateAxios.get<UserResponseType>('/user/profile', {
        params: {
            nickname 
          },
    });
    return data; 
  } catch (error) {
    console.error('Error fetching searchMember data:', error);
    return null; 
  }
};