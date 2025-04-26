export interface OurTeamType {
    teamId: number;
    emoji: string[];
    name: string;
    verification: number;
}

export interface OurTeamResponseType {
    status: string;
    code: string;
    message: string;
    data: OurTeamType;
}