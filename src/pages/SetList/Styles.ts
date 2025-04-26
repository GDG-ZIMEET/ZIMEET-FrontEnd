import styled from 'styled-components';
import HeaderLogo from 'assets/icon/SetList/SetListHeader.svg?react';
import { colors } from './SetListData';

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
  padding-left: 3%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const DayText = styled.div`
  width: 100%;
  height: 50%;
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
`;

export const DayButton = styled.button<{ isActive: boolean, isLast: boolean }>`
  width: 50%;
  height: 70%;
  border: none;
  color: ${({ isActive }) => (isActive ? '#000' : '#F2F2F2')};
  font-weight: 500;
  font-size: 14px;
  border-right: ${({ isLast }: { isLast?: boolean }) => (isLast ? 'none' : '2px solid #F2F2F2')};
  background: none;
  cursor: pointer;
`;


export const StageType = styled.div`
  width: 100%;  
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 2.5%;
  border-top: 1px solid #D9D9D9;
`;

export const StageTypeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SquareIcon = styled.div<{ color: string }>`
  width: 16px;
  height: 14px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
  margin-right: 5%;
`;

export const StageTypeText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: Medium;
  color: #000000;
  white-space: nowrap;
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


