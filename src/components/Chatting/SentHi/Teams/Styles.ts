import styled from 'styled-components';
import * as I from '../../../../assets/Icons';

export const TeamComponent = styled.div`
  width: 102%;
  height: 80%;
  margin-left: -1%;
  overflow-y: auto;
  @media (max-width: 768px) {
    height: 71%;
  }
  &::-webkit-scrollbar {
   display: none;
  }
`;

export const NoTeamsMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ZimeetLogo = styled(I.ZimeetLogo)`
  width: 30%;
  margin-bottom: 5%;
 `;

export const NoTeamsMessage = styled.div`
  font-size: 14px;
  color: #000000;
  text-align: center;
  line-height: 1.5; 
`;

export const Team = styled.div`
  width: 97%;
  height: 24%;
  padding: 10px;
  margin: 3% auto;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

export const TeamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 0 1% 1%;
`;

export const TeamName = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export const WriteTime = styled.div`
  font-size: 10px;
  color: #FA2D4C;

  &::after {
    font-size: 14px;
    content: ' >';
    color: #000000; 
  }
`;

export const JoinMembers = styled.div`
  width: 35%; 
  height: 75%;
  display: flex;
  position: relative;
`;

export const JoinMemberBox = styled.div`
  width: 37%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: -5%;
`;


export const JoinMember = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: rgba(234, 67, 53, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  position: relative;
`;

export const Introduction = styled.div`
  height: 75%; 
  margin-left: 5%;
  margin-top: 3%;
  font-size: 10px;
  color: #000000;
  flex: 1;
  align-items: center;
`;

export const Major = styled.div`
  height: 40%; 
  margin-left: 5%;
  font-size: 10px;
  color: #000000;
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
`;

export const MusicStylesContainer = styled.div`
  display: flex;
  height: 53%;
  width: 70%;
`;

export const MusicStyles = styled.div`
  height: 52%; 
  width: 70%;
  margin-left: 5%;
  font-size: 10px;
  color: #000000;
  display: flex;
  background-color: #F2F2F2;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const MusicEmoji = styled(I.Music)`
    margin-left: 6%;
`;

export const JoinMembersAndIntroduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85%;
  margin: 0 0 0 2%;
`;
