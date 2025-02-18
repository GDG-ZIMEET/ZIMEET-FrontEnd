import { privateAxios } from '../axiosConfig';
import { MyProfileResponseType } from '../../recoil/type/MyPage/MyProfileType';

export const getmyProfile = async (): Promise<MyProfileResponseType | null> => {
  try {
    const { data } = await privateAxios.get<MyProfileResponseType>('/user/myprofile')
    return data; 
  } catch (error) {
    console.error('Error fetching team gallery data:', error);
    return null; 
  }
};
