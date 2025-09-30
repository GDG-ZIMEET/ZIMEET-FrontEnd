import { privateAxios } from '../axiosConfig';

interface postacceptHiRequest {
    toId: number;
    fromId?: number;
}

export const postacceptTeamHi = async (data: postacceptHiRequest) => {
    try {
        const response = await privateAxios.post('/chat/rooms/teams', data);
        return response.data;
    } catch (error) {
        console.error('Error accept hi:', error);
        throw error;
    }
};

export default postacceptTeamHi;