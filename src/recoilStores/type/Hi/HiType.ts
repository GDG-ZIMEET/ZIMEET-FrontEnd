export interface Users {
    major: number;
    emoji: string;
    music: string;
}
  
export interface HiType {
    myTeamId: number;
    teamId: number;
    teamName: string;
    userProfileDtos: Users[];
    age: number;
    dateTime: string;
}
  
export interface HiResponseType {
    status: string;
    code: string;
    message: string;
    data: HiType[];
}