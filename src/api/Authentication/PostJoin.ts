import { publicAxios } from '../axiosConfig';
import { SignUpRequestType } from '../../recoil/type/Authentication/JoinType';

export interface SignUpResponse {
    status: string;
    code: string;
    message: string;
    data: {
        message: string;
    };
};

export const postJoin = async (userData: SignUpRequestType): Promise<SignUpResponse | null> => {
  try {
    const { data } = await publicAxios.post<SignUpResponse>(`/user/signup`, userData);
    return data;
  } catch (error) {
    console.error('Error fetching booth detail data:', error);
    return null;
  }
};