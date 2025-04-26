export interface SignUpRequestType {
    name: string;
    studentNumber: string;
    password: string;
    nickname: string;
    grade: string;
    age: number;
    gender: 'MALE' | 'FEMALE';
    major: string;
    emoji: string;
    mbti: string;
    music: string;
    style: string;
    idealAge: string;
    idealType: string;
}