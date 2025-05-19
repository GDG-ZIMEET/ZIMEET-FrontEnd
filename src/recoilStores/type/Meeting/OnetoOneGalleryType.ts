export interface UserType {
    userId: number;
    emoji: string;
    name: string;
    verification: number;
    major: string;
    age: number;
    music: string;
  }
  
  export interface OnetoOneGalleryResponseType {
    status: string;
    code: string;
    message: string;
    data: {
      userList: UserType[];
    };
  }