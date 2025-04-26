export interface UserType {
    nickname: string;
    studentNumber: string;
    gender: string;
    emoji: string;
    age: number;
    major: string;
    mbti: string;
    style: string;
    idealType: string;
    idealAge: string;
    music: string;
    level: string;
}

export interface UserResponseType {
    status: string;
    code: string;
    message: string;
    data: UserType;
}