import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const HelpLayout = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #f2f2f2;  
  background-color: #ffffff;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
`;

export const BackButton = styled(I.Back)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Title = styled.h2`
  font-size: 15px; 
  font-weight: bold;
  color: #000000;
  margin-left: 1%; 
`;

export const notionContainer = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 80%;
  display: flex;
  align-items: center; // 텍스트를 중간에 위치하도록 설정
  justify-content: center; // 텍스트를 중간에 위치하도록 설정
`;

export const notionTitle = styled.h3`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`;