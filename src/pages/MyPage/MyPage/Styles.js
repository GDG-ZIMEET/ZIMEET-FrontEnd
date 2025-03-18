import styled from 'styled-components';
import * as I from '../../../assets/Icons';
import zimeetLoading from '../../../assets/icon/zimeetLoading.svg';

export const MyPageContainer = styled.div`
  width: 100%; 
  height: 89%;
  background-color: white;
  overflow: auto;
  font-family: Pretendard, sans-serif;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const LoadingContainer = styled.img.attrs({
  src: zimeetLoading
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  margin: 10% auto;
`;

//logo
export const LogoContainer = styled.div`
  width: 100%; 
  height: 10%;
  display: flex;
  justify-content: center;
  padding: 2%;
  background-color: black;
`;

export const ZimeetLogo = styled(I.ZimeetLogo) `
  width: 12%;
  height: 100%;
`;

//MyInfo
export const BlackContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: relative;
  z-index: 0;
  border: none;
  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
      height: 40%;
    }
  }
`;

export const WhiteArea = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  z-index: 1;
  background-color: white;
  margin-top: 15%;
  border-radius: 50px 50px 0 0;
`;

export const InfoContainer = styled.div` 
  width: 90%;
  position : absolute;
  z-index: 2;  
`;

export const InfoGetContainer = styled.div` 
  width: 90%;
  height: 100%;
  position : absolute;
  display: flex;
  flex-direction: column;
  z-index: 2;  
`;

export const MyInfoContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px; 
  border-top-right-radius: 20px;
`;

export const MyInfo = styled.div`
  height: 50%;
  padding: 7% 0 7% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-left-radius: 20px; 
  border-top-right-radius: 20px;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  line-height: 1.3;
  b { 
    font-family: Pretendard;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: -3%;
  }
`;
export const MyDetailInfoText = styled.div`
  display: flex;
  width: 69%;
  flex-direction: column;
  background-color: white;
  text-align: left;
  font-family: Pretendard;
  font-size: 12px;
  line-height: 1.3;
  b { 
    font-family: Pretendard;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: -3%;
  }
`;

export const MyDetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5% 6% 3% 5%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  line-height: 1.3;
`;

export const MyMeetingContainer = styled.div`
  padding: 9% 0 9% 0;
  background-color: #f6f5fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px; 
  border-bottom-right-radius: 20px;
`;

export const MyMeetingDetailContainer = styled.div`
  background-color: #f6f5fa;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3% 0 3% 0;
  border-bottom-left-radius: 20px; 
  border-bottom-right-radius: 20px;
`;

export const LoginBtn = styled.button`
  font-weight: 700;
  width: 80%; 
  padding: 5%;
  font-family: Pretendard, sans-serif;
  background-color: #EA4335;
  border-radius: 10px;
  margin-bottom: 2%;
  color: white;
`;
export const LoginText = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  b {
    font-weight: 700;
  }
`;

export const EmojiWrap = styled.div`
  width: 18%; 
  aspect-ratio: 1;
  background-color: rgba(234, 67, 53, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50%; 
  margin-right: 1%;
  margin-bottom: 8%;
`;
export const MyEmoji = styled.img`
  width: 70%;
  height: 70%;
`;

export const MyInfoText = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  padding-bottom: 3%;

  &.bold {
    font-weight: 700;
  }
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

export const EditMyInfo = styled(I.EditMyInfo) `
  margin-bottom: 17%;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const MyMeeting = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 1%;
`;
export const MyMeetingTitle = styled.p`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 1%;
`;
export const MyMeetingText = styled.p`
  font-family: Pretendard;
  font-size: 12px;
`;
export const MeetingEmojiWrap = styled.div`
  width: 70%; 
  aspect-ratio: 1;  
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 50%; 
  margin: 10% 0 10% 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;

export const Hiblack = styled(I.HiIconblack) `
  width: 70%;
  height: 60%;
`;
export const Ticket = styled(I.Ticket) `
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
`;

export const OutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 3% auto;
  width: 95%;
`;
export const OutText = styled.a`
  font-size: 14px;
  padding: 3%;
  font-family: Pretendard, sans-serif;
  &.modal{
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Text = styled.p`
    width: 90%;
    font-family: Pretendard, sans-serif;
    font-size: 12px;
    line-height: 1.3;
    margin: 3% auto 0 auto;
    b {
      font-size: 15px;
      font-weight: 700;
    }
`;
