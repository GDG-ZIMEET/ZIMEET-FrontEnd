import styled from 'styled-components';
import HeartMail from '../../../../assets/icon/TeamInfo/HeartMail.svg'

export const Modallayout = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  padding: 4%;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 83%; 
  height: auto;
`;

export const ModalTitle = styled.div`
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #000000;
  margin: 2% 0 3%;
  font-weight: bold;
`;

export const ModalText = styled.p`
  font-size: 12px;
  color: #9C9C9C;
  white-space: pre-line;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 4%;
  line-height: 22px; 
  font-weight: 400;
`;

export const HeartIcon = styled.img`
  width: 8%;  
  height: 8%;
  margin-left: 3%; 
`;

export const HighlightText = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;



export const ButtonBox = styled.div`
  display: flex;
  height: 30%;
`;


export const CancelButton = styled.button`
  background: #EA4335;
  color: #FFFFFF;
  border: none;
  width: 100%;
  font-weight: bold;
  border-radius: 12px;
  padding: 4%;
  cursor: pointer;
`;