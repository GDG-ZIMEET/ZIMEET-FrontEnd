//부스 api 타입
export interface Club {
    clubId: number;
    name: string;
    rep: string;
    category: string;
    account: string | null;
}

export interface ClubDetailType {
  clubId: number;
  name: string;
  item: [
    {
      id: number;
      name: string;
      content: string;
    }
  ];
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

// 부스 상세 정보 타입
export interface BoothDetailResponseType {
  status: string;
  code: string;
  message: string;
  data: ClubDetailType;
}