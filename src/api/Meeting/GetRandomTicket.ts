import { privateAxios } from '../axiosConfig';
   
export interface ticketResponseType {
status: string;
code: string;
message: string;
data: {
    ticket: number;
    };
};

export const getRandomTicket = async (): Promise<ticketResponseType | null> => {
  try {
    const { data } = await privateAxios.get<ticketResponseType>('/random/ticket', {
    });
    return data; 
  } catch (error) {
    console.error('Error fetching ticket data:', error);
    return null; 
  }
};
