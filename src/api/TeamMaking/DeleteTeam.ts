import { privateAxios } from '../axiosConfig';

export const deleteTeam = async (
    teamType: string
): Promise<any> => {
    try {
        const { data } = await privateAxios.delete('/meeting/myTeam', {
            params: {
                teamType  
            },
        });
        return data; 
    } catch (error) {
        console.error('Error deleteTeam data:', error);
        return null; 
    }
};
