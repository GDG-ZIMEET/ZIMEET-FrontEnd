import { privateAxios } from '../axiosConfig';

export interface UpdateEmojiResponse {
    status: string;
    code: string;
    message: string;
    data: {
        emoji: string;
    };
}

export interface UpdateEmojiRequestType {
    emoji: string;
}

export const updateEmoji = async (userData: UpdateEmojiRequestType): Promise<UpdateEmojiResponse | null> => {
    try {
        // console.log("PATCH 요청 보낼 데이터:", JSON.stringify(userData)); 

        const { data } = await privateAxios.patch<UpdateEmojiResponse>(
            `/user/myprofile/emoji`,
            userData
        );

        // console.log("서버 응답 데이터:", data); 
        return data;
    } catch (error: any) {
        // console.error("에러:", error.response?.data || error.message);
        return null;
    }
};
