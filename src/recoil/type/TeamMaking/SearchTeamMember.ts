export interface SearchTeamMemberType {
    userId: number;
    nickname: string;
    major: string;
    grade: string;
    phoneNumber: string;
}

export interface SearchTeamMemberResponseType {
    status: string;
    code: string;
    message: string;
    data: SearchTeamMemberType[];
}