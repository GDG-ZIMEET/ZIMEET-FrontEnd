import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const TeamLayout = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
`;

export const TeamContainer = styled.div`
  width: 100%;
  height: 88%;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 83%;
  }}
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin:  5% 6% 3%;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    font-size: 14px;
  }}
`;


export const Description = styled.div`
  font-size: 12px;
  color: #000000;
  margin: 0 0 3% 6%;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    font-size: 12px;
  }}
`;


export const Team = styled.div`
  width: 97%;
  height: 71%;
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
`;

export const PinkCircle = styled(I.PinkCircle)`
  width: 120%;
  height: 100%;
  position: absolute;
`;

export const JoinMember = styled.div`
  font-size: 26px;
  position: relative;
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
