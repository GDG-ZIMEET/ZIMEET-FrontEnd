import styled from 'styled-components';
import * as I from '../../../../assets/Icons';
import zimeetLoading from '../../../../assets/icon/zimeetLoading.svg';

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

export const LoadingContainer = styled.img.attrs({
  src: zimeetLoading
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  margin: 0 auto;
`;

export const NoTeamsMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ZimeetLogo = styled(I.ZimeetLogo)`
  width: 40%;
  height: 16%;
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
  margin-left: auto;
`;

export const ViewIcon = styled(I.View)`
  width: 3%;
  height: 5%;
  margin-left: 1%;
`;

export const JoinMembers = styled.div<{ $memberCount: number }>`
  width: ${props => props.$memberCount == 1 ? '25%' : '35%'}; 
  height: 75%;
  display: flex;
  position: relative;
`;

export const JoinMemberBox = styled.div`
  width: 37%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: -5%;
`;


export const JoinMember = styled.div`
  height: 60%;
 align-items: center;
 justify-content: center;
 position: relative;
 display: flex;
  aspect-ratio:1;
  background-color: rgba(234, 67, 53, 0.08); 
  border-radius: 50%;
  img{
    width: 60%;}
`;

export const Introduction = styled.div<{ $memberCount: number }>`
  height: 75%; 
  margin-left: ${props => props.$memberCount == 1 ? '0' : '5%'};
  margin-top: 3%;
  font-size: 10px;
  color: #000000;
  flex: 1;
  align-items: center;
  display: ${props => props.$memberCount == 1 ? 'flex' : 'block'};
  flex-direction: ${props => props.$memberCount == 1 ? 'row' : 'column'};
`;

export const Major = styled.div<{ $memberCount: number }>`
  height: 53%; 
  margin-left: ${props => props.$memberCount == 1 ? '0' : '5%'};
  font-size: 10px;
  color: #000000;
  display: flex;
  align-items: center;
`;

export const MusicStylesContainer = styled.div<{ $memberCount: number }>`
  display: flex;
  height: 53%;
  flex: 1;
  display: flex;
  align-items: ${props => props.$memberCount == 1 ? 'center' : 'flex-start'};
`;

export const MusicStyles = styled.div`
  height: 52%; 
  width: auto;
  padding: 0 7% 0 7%;
  font-size: 10px;
  color: #000000;
  display: flex;
  background-color: #F2F2F2;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
export const MusicEmoji = styled(I.Music)`
 width: 20%;
    height: 50%;
`;

export const JoinMembersAndIntroduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85%;
  margin: 0 0 0 2%;
`;
