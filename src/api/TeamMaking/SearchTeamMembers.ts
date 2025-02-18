import { privateAxios } from '../axiosConfig';
import { SearchTeamMemberResponseType } from '../../recoil/type/TeamMaking/SearchTeamMember';


export const GetCheckDuplicate = async (
  nickname: string | null, 
  phoneNumber: string | null
): Promise<SearchTeamMemberResponseType | null> => {
  try {
    const params: { nickname?: string, phoneNumber?: string } = {};

    if (nickname) params.nickname = nickname;
    if (phoneNumber) params.phoneNumber = phoneNumber;

    const { data } = await privateAxios.get<SearchTeamMemberResponseType>('/meeting/search', {
      params: params,
    });
    return data; 
  } catch (error) {
    console.error('Error fetching searchMember data:', error);
    return null; 
  }
};
