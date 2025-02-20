import { privateAxios } from '../axiosConfig';

export const getTeamdeleteCount = async (): Promise<any> => {
    try {
        const { data } = await privateAxios.get('/meeting/myTeam/delete');
        return data; 
    } catch (error) {
        console.error('Error fetching team deletecount data:', error);
        return null; 
    }
};
