import styled, { css } from 'styled-components';

export const ChattingTypeLayout = styled.div`
  display: flex;
  padding: 0.7% 0 0 0;
  margin: 3% 0 1% 0;
  height: 5.5%;
`;

export const ChattingTypeComponent = styled.div`
  padding: 0.5% 1% 0.5% 0;
  width: 23%
`;


const buttonStyles = css<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? 'black' : '#F2F2F2')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px; 
  cursor: pointer;
  border: none;
  border-radius: 6px;
  height: 100%;
  width: 100%; 
  white-space: nowrap;

  &:hover {
    background-color: ${({ selected }) => (selected ? 'black' : '#ddd')};
  }
`;

export const Chatting = styled.button<{ selected: boolean }>`
  ${buttonStyles}
`;

export const ReceiveHi = styled(Chatting)``;

export const SendHi = styled(Chatting)``;

