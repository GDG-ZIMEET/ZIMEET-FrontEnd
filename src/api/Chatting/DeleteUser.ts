import { privateAxios } from '../axiosConfig';

export const deleteuser = async (
    roomId: number
): Promise<any> => {
    try {
        const { data } = await privateAxios.delete(`/chat/rooms/${roomId}/users`);
        return data; 
    } catch (error) {
        console.error('Error deleteUser', error);
        return null; 
    }
};
