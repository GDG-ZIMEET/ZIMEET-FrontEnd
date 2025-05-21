export interface MyProfileType {
    id: number;
    name: string;
    studentNumber: string;
    gender: string;
    phoneNumber: string;
    nickname: string;
    grade: string;
    age: number;
    major: string;
    emoji: string;
    mbti: string;
    music: string;
    style: string;
    idealAge: string;
    idealType: string;
    level: string;
    profileStatus: string; //ACTIVE, INACTIVE
}

export interface MyProfileResponseType {
    status: string;
    code: string;
    message: string;
    data: MyProfileType;
}