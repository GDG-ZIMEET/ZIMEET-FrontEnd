import styled from 'styled-components';
import * as I from "../../../assets/Icons";
import zimeetLoading from '../../../assets/icon/zimeetLoading.svg';

export const JoinContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  font-family: Pretendard, sans-serif;
  overflow-y: auto;
`;

export const LoadingContainer = styled.img.attrs({
  src: zimeetLoading
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 30%;
  margin: 0 auto;
`;

//상단바
export const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
`;

export const BackBtn = styled(I.Back)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const TopBarText = styled.h2`
  font-weight: 700;
  font-size: 15px; 
  font-weight: bold;
  color: #000000;
  margin-left: 1%; 
`;

export const ContentContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

//이모지
export const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5% 0;
`;
export const CircleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: auto;
  padding: 8%;

  &.emoji {
    width: 20%; 
    padding:0;
    cursor: pointer;
  }
  
`;
export const EmojiWrap = styled.div`
  width: 100%;
  aspect-ratio: 1; /* 원 비율 유지 */
  background-color: rgba(234, 67, 53, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  border-radius: 50%; 
  color: #EA4335;

  &.blue {
    background-color: rgba(66, 133, 244, 0.1);
    color: rgb(66, 133, 244);
  }
`;
export const TossEmoji = styled.img`
  width: 70%; height: 70%;
`;
export const Text = styled.p`
  font-size: 12px;
  padding: 2% 0;
  text-align: center;
`;


//프로필
export const ProfileContainer = styled.div`
  font-size: 14px;
  width: 100%;
  padding: 7% 5% 5% 5%;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4%;
`;
export const ProfileItems = styled.div``;
export const ProfileValues = styled.div`
  &.nickname {
    text-decoration: underline;
  }
`;


//취향
export const PreferContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3% 5% 5% 5%;
`;
export const PreferWrapper = styled.div`
  width: 25%;
`;
export const PreferValue = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
export const PreferItems = styled.p`
  font-size: 12px;
  padding: 2%;
`;


//버튼
export const BtnContainer = styled.div`
  padding: 5% 0;
  height: 100%;
  text-align: center;
`;

export const ModifyBtn = styled.button`
  font-weight: 700;
  width: 90%; height: 100%;
  padding: 4%;
  border-radius: 0.6rem;
  background-color: ${({ disabled }) => (disabled ? '#ececec' : '#ea4335')};
  color: ${({ disabled }) => (disabled ? '#7c7c7c' : 'white')};
`;
