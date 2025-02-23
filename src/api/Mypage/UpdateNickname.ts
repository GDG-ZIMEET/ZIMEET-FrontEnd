import { privateAxios } from '../axiosConfig'; 

export interface UpdateNicknameResponse {
    status: string;
    code: string;
    message: string;
    data: {
        nickname: string;
    };
}

export interface UpdateNicknameRequestType {
    nickname: string;
}

export const updateNickname = async (userData: UpdateNicknameRequestType): Promise<UpdateNicknameResponse | null> => {
    try {
        // console.log("PATCH 요청 보낼 데이터:", JSON.stringify(userData)); 

        const { data } = await privateAxios.patch<UpdateNicknameResponse>(
            `/user/myprofile/nickname`,
            userData
        );

        // console.log("서버 응답 데이터:", data); 
        return data;
    } catch (error: any) {
        // console.error("에러:", error.response?.data || error.message);
        return null;
    }
};
