export interface TeamType {
    teamId: number;
    emoji: string[];
    name: string;
    verification: number;
    major: string[];
    age: number;
    music: string[];
  }
  
  export interface TeamGalleryResponseType {
    status: string;
    code: string;
    message: string;
    data: {
      teamList: TeamType[];
    };
  }