import { privateAxios } from '../axiosConfig';

interface getacceptHiRequest {
    toId: number;
    fromId: number;
}

export const getacceptHi = async (data: getacceptHiRequest) => {
    try {
        const response = await privateAxios.post('/chat/rooms/teams', data);
        return response.data;
    } catch (error) {
        console.error('Error send hi:', error);
        throw error;
    }
};

export default getacceptHi;