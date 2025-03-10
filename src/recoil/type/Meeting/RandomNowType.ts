export interface User {
    userId: number;
    emoji: string;
    gender: string;
}

export interface RandomNowResponseType {
status: string;
code: string;
message: string;
data: {
    matchingId: number;
    userList: User[];
    matchingStatus: string;
    };
};