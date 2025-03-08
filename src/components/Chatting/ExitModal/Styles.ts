import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  padding: 4%;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 84%; 
  z-index: 2500;
`;

export const ModalTitle = styled.h2`
  font-size: 16px;
  color: #000000;
  margin: 6% 0 7%;
  font-weight: bold;
`;

export const ModalText = styled.p`
  font-size: 12px;
  color: #9C9C9C;
  white-space: pre-line;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 8%;
  line-height: 1.5;
`;

export const HighlightText = styled.span`
  text-decoration: underline;
  color: #EA4335;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: auto;
`;

export const ConfirmButton = styled.button`
  padding: 4% 2%;
  background: red;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 29%;
`;

export const CancelButton = styled.button`
  padding: 4% 2%;
  background: #F2F2F2;
  color: #A6A6A6;
  border: none;
  width: 72%;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 3%;
`;