import { privateAxios } from '../axiosConfig';
import { SearchTeamMemberResponseType } from '../../recoilStores/type/TeamMaking/SearchTeamMember';


export const getSearchTeamMember = async (
  teamType: string,
  nickname: string | null, 
  phoneNumber: string | null
): Promise<SearchTeamMemberResponseType | null> => {
  try {
    const params: { teamType: string, nickname?: string, phoneNumber?: string } = { teamType };

    if (nickname) params.nickname = nickname;
    if (phoneNumber) params.phoneNumber = phoneNumber;

    const { data } = await privateAxios.get<SearchTeamMemberResponseType>('/meeting/search', { params });

    return data; 
  } catch (error) {
    console.error('Error fetching searchMember data:', error);
    return null; 
  }
};
