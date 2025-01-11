import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const ChattingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ChattingBox = styled.div`
  margin-top: 9%;
  height: 90%;
  width: 100%;
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
  z-index: 3;
  background-color: #ffffff;
`;

export const BackButton = styled(I.Back)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const ChattingTitle = styled.h1`
  font-size: 15px; 
  font-weight: bold;
  color: #000000;
  margin-left: 1%; 
`;

export const MessageContainer = styled.div<{ isMine: boolean; borderRadius: string }>`
  width: 100%;
  height: ${({ borderRadius, isMine }) => (borderRadius === '8px' || isMine ? '9%' : '12%')};
  display: flex;
  align-items: center;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
`;

export const Avatar = styled.img<{ show: boolean }>`
  width: 35px;
  height: 35px; 
  border-radius: 50%;
  margin: 0 1%;
  border: 1px solid #ccc;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`;

export const MessageContent = styled.div<{ isMine: boolean }>`
  padding: 2%;
  margin-left: -1%;
`;

export const MessageUser = styled.strong`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

export const MessageText = styled.span<{ isMine: boolean; borderRadius: string }>`
  word-break: break-word;
  display: block;
  background-color: ${({ isMine }) => (isMine ? '#007bff' : '#D9D9D9')};
  color: ${({ isMine }) => (isMine ? 'white' : 'black')};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 10px;
`;

export const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  padding: 1%;
  border-radius: 20px;
  background-color: #D9D9D9;
  justify-content: space-between; 
  z-index: 1000; // 키보드 위에 표시되도록 z-index 설정
`;

export const ChatInput = styled.input`
  border-radius: 8px;
  padding: 10px;
  margin-right: 10px;
  font-size: 17px; 
  -webkit-text-size-adjust: none; 
`;

export const SendButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 1%;
`;



