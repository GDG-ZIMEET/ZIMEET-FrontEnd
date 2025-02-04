import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  padding: 4%;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 84.5%; 
  height: 28.5%;

  
  @media (min-width: 430px) {
    width: 50%;
  }

  @media (min-width: 630px) {
    width: 40%;
  }

  @media (min-width: 768px) {
    width: 30%;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 16px;
  color: #000000;
  margin: 2% 0 7%;
  font-weight: bold;
`;

export const ModalText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #000;
  white-space: pre-line;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 7%;
  line-height: 1.5;
`;

export const HighlightText = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;

export const TicketCount = styled.div`
  font-size: 12px;
  color: #000000;
  font-weight: bold;
  background-color: #F2F2F2;
  height: 12%; 
  width: 38%; 
  border-radius: 20px;
  line-height: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
  margin-bottom: 5%;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const ConfirmButton = styled.button`
  padding: 4% 2%;
  border-radius: 12px;
  background: #EA4335;
  color: #ffffff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 29%;
  
`;

export const CancelButton = styled.button`
  padding: 4% 2%;
  background: #F2F2F2;
  color: #A6A6A6;
  border: none;
  width: 72%;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 3%;
`;