import styled from 'styled-components';
import HeaderLogo from 'assets/icon/SetList/SetListHeader.svg?react';
import colors from './colors';

export const SetListLayout = styled.div`
  background-color: #FFFFFF;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Pretendard, sans-serif;
`;

export const SetListHeader = styled.div`
  width: 100%;
  height: 20%;
  background-color: ${colors.other};
  position: relative;
`;

export const HeaderLogoIcon = styled(HeaderLogo)`
  margin: 7% 0 0 0;
  width: 65%;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 0;
`;

export const HeaderInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`;

export const HeaderComponent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const DayText = styled.div`
  width: 100%;
  height: 50%;
  padding-left: 3%;
  padding-bottom: 3%;
  display: flex;
  justify-content: flex-start; 
  align-items: flex-end;
  font-size: 0.875rem;
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
`;

export const StageTitle = styled.div`
  width: 100%;
  height: 50%;
  padding-left: 3%;
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start;
  font-size: 33px;
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
`;

export const TimeText = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
  margin-bottom: 5%;
`;

export const ChangeDay = styled.div`
  width: 100%;  
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

export const StageType = styled.div`
  width: 100%;  
  height: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

export const StageListContainer = styled.div`
  width: 100%;  
  height: 59%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

export const TimeLine = styled.div`
  width: 15%;  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const StageList = styled.div`
  width: 85%;  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;


