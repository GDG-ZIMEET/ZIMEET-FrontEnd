//부스 api 타입
export interface Club {
    clubId: number;
    place: string;
    name: string;
    rep: string;
    category: string;
    account: string | null;
    time: string | null;
    info: string | null;
}
  
export interface BoothsResponse {
    status: string;
    code: string;
    message: string;
    data: {
      clubList: Club[];
    };
}