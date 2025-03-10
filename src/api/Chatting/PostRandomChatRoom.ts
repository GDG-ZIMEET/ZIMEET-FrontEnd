import { privateAxios } from '../axiosConfig';

interface randomChatRequest {
    ids: number[];
}

export const postrandomChatRoom = async (data: randomChatRequest) => {
    try {
        const response = await privateAxios.post('/chat/rooms/addUsers', data);
        return response.data;
    } catch (error) {
        console.error('Error add random chat room :', error);
        throw error;
    }
};