import styled from 'styled-components';
import * as I from '../../../../assets/Icons';
import zimeetLoading from '../../../../assets/icon/zimeetLoading.svg';

export const TeamComponent = styled.div`
  width: 102%;
  height: 79%;
  margin-left: -1%;
  overflow-y: auto;
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
  height: 17%;
  padding: 10px;
  margin: 3% auto;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;

export const TeamHeader = styled.div`
  display: flex;
  width: 89%;
  justify-content: space-between;
  align-items: center;
  margin: 2% 1% 1% 1%;
`;

export const TeamName = styled.div`
  font-size: 12px;
  font-weight: bold;
  flex: 1;
`;

export const WriteTime = styled.div`
  font-size: 10px;
  color: #FA2D4C;
`;

export const ViewIcon = styled(I.View)`
  width: 3%;
  height: 5%;
  margin-left: 1%;
`;

export const JoinMembers = styled.div`
  width: 35%; 
  height: 100%;
  display: flex;
  margin-top: 3%;
`;

export const ChatInfoContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const JoinMemberBox = styled.div`
  width: 40%;
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

export const Introduction = styled.div`
  height: 45%; 
  width: 100%;
  font-size: 10px;
  color: #000000;
  display: flex;
  align-items: center;
`;

export const JoinMembersAndIntroduction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85%;
  margin: auto 0 auto 0;
`;
