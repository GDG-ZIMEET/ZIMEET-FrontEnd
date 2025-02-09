export interface User {
    userId: number;
    emoji: string;
    nickname: string;
    age: number;
    studentNumber: string;
    major: string;
    music: string;
    mbti: string;
    style: string;
    idealType: string;
    idealAge: string;
}
  
export interface OurTeamData {
teamId: number;
name: string;
verification: number;
gender: string;
userList: User[];
}
  
export interface OurTeamDetailResponseType {
status: string;
code: string;
message: string;
data: OurTeamData;
}

export interface TeamData {
    teamId: number;
    name: string;
    verification: number;
    gender: string;
    hi: number;
    userList: User[];
}

export interface TeamDetailResponseType {
    status: string;
    code: string;
    message: string;
    data: TeamData;
}