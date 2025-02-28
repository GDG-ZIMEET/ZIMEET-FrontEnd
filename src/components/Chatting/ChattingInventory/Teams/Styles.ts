import styled from 'styled-components';
import * as I from '../../../../assets/Icons';
import zimeetLoading from '../../../../assets/icon/zimeetLoding.svg';

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
  height: 21%;
  padding: 10px;
  margin: 3% auto;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
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
  height: 75%; 
  margin-left: 5%;
  font-size: 10px;
  color: #000000;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const JoinMembersAndIntroduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85%;
  margin: 0 0 0 2%;
`;
