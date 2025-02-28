export interface Users {
    major: number;
    emoji: string;
    music: string;
}
  
export interface sendHiType {
    myTeamId: number;
    teamId: number;
    teamName: string;
    teamList: Users[];
    age: number;
    dateTime: string;
}
  
export interface sendHiResponseType {
    status: string;
    code: string;
    message: string;
    data: sendHiType[];
}