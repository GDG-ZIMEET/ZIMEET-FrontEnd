import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


export const ModalContainer = styled.div`
  background-color: white;
  padding: 5%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  align-items: center;
  text-align: center;
`;

export const BoldText = styled.p`
  font-weight: 700;
  font-size: 14px;
  padding: 2% 0 4% 0;
`;

export const Text = styled.p`
  font-size: 12px;
  padding: 1% 0 2% 0;
`;


export const BtnContainer = styled.div`
  padding-top: 4%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CancelBtn = styled.button`
  width: 56%;
  background-color: #f5f5f5;
  color: #a6a6a6;
  font-weight: 600;
  font-size: 16px;
  border-radius: 0.8rem;
  padding: 3.7%;
`;
export const SaveBtn = styled.button`
  width: 42%;
  font-weight: 600;
  font-size: 16px;
  padding: 3.5%;
  border-radius: 0.8rem;
  background-color: #ea4335;
  color: white;
`;

