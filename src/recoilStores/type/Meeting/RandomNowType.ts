export interface User {
    userId: number;
    emoji: string;
    gender: string;
}

export interface RandomTeamType {
    matchingId: number;
    userList: User[];
    matchingStatus: string;
}

export interface RandomNowResponseType {
status: string;
code: string;
message: string;
data: RandomTeamType;
}