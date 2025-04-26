import styled from 'styled-components';
import * as I from '../../../assets/Icons'; 

export const NavBarContainer = styled.nav`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 12%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  
  //마이페이지 navbar 중간에 위치함 수정용
  position: fixed; 
  z-index: 100; 
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 20%;
  font-size: 12px;
  color: #151515;
  text-align: center;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;
export const RedDotIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

export const RedDot = styled.div`
  position: absolute;
  top: 23%;   
  left: 33%;  
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 10;
`;

//아이콘import
export const Home = styled(I.Home)`
  width: 100%;
  height: 100%;
`;

export const HomeWhite = styled(I.HomeWhite)`
  width: 100%;
  height: 100%;
`;

export const Meeting = styled(I.Meeting)`
  width: 100%;
  height: 70%;
`;

export const MeetingHeart = styled(I.MeetingHeart)`
  width: 100%;
  height: 70%;
`;

export const Schatting = styled(I.Schatting)`
  width: 100%;
  height: 100%;
`;

export const Chatting = styled(I.Chatting)`
  width: 100%;
  height: 100%;
`;

export const SmyInformation = styled(I.SmyInformation)`
  width: 100%;
  height: 80%;
`;

export const MyInformation = styled(I.MyInformation)`
  width: 100%;
  height: 80%;
`;

export const TimeLine = styled(I.TimeLine)`
  width: 100%;
  height: 70%;
`;

export const TimeLineWhite = styled(I.TimeLineWhite)`
  width: 100%;
  height: 70%;
`;

