import styled from 'styled-components';

export const MyPageContainer = styled.div`
  width: 100%; 
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; 
  overflow: auto;
`;

export const MyPageBox = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

//logo
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 3% 0;
  
  background-color: black;
  width: 100%;
  position: absolute;
  z-index: 2;
`;
export const Logo = styled.div`
  width: 12%;
  text-align: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;


export const BlackContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 0; margin: 0;
`;
export const WhiteArea = styled.div`
  width: 100%; 
  background-color: white;
  position: absolute; 
  top: 19%;
  z-index: 0; 
  border-radius: 2rem 2rem 0 0; 
  padding-top: 50%;
  padding-bottom: 7%;
`;

//MyInfo
export const InfoContainer = styled.div` 
  width: 90%;
  position: relative; // WhiteArea와 상호작용 설정
  z-index: 1; // WhiteArea 위로 
  background: transparent; 
  margin-top: 15%;
`;

export const MyInfoContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3%;
  border-top-left-radius: 1rem; border-top-right-radius: 1rem;
`;
export const EmojiContainer = styled.div`
  width: 15%;
  align-self: flex-start;
  padding-top: 2%;
`;
export const CircleWrap = styled.div`
  width: 100%; height: auto;
`;
export const EmojiWrap = styled.div`
  width: 100%; 
  aspect-ratio: 1; //원 비율 유지 
  background-color: rgba(234, 67, 53, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50%; 
`;
export const MyEmoji = styled.p`
  font-size: 20px;
`;
export const MyInfo = styled.div`
`;
export const MyNameText = styled.p`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 14px;
  padding: 5% 0;
`;
export const MyInfoText = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  padding-bottom: 3%;
`;
export const MyInfoModifyWrapper = styled.div`
  align-self: flex-start;
  width: 5%;
  padding-top: 2%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

//MyMeeting
export const MyMeetingContainer = styled.div`
  background-color: #f6f5fa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3%;
  border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem;
`;
export const MyMeeting = styled.div`
  width: 30%;
  align-items: center;
  text-align: center;
`;
export const MyMeetingTitle = styled.p`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 12px;
  padding: 5% 0 3% 0;
`;
export const MyMeetingText = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  padding: 3% 0;
`;
export const MeetingCircleWrap = styled.div`
  width: 100%; height: auto;
  padding: 13%;
`;
export const MeetingEmojiWrap = styled.div`
  width: 100%; 
  aspect-ratio: 1; //원 비율 유지 
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50%; 
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;
export const MeetingIcons = styled.p`
  font-size: 30px;
`;


export const ComponentContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3%;
  padding-top: 6%;
  flex: 1;
  padding-bottom: 50%;
`;

export const OutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  width: 100%;
`;
export const OutText = styled.a`
  font-size: 14px;
  padding: 3%;
`;

