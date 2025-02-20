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
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 5%;
  border-radius: 10px;
  text-align: center;
  width: 90%;
`;

export const Emoji = styled.p`
  font-size: 40px;
  padding: 3%;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 700;
  padding: 2%;
`;

export const Text = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  color: #9c9c9c;
  padding-top: 1%;
`;

export const CloseButton = styled.button`
  font-family: Pretendard;
  font-weight: 700;
  color: white;
  width: 100%;
  background-color: #ea4335;
  border: none;
  border-radius: 10px;
  padding: 3% 0;
  margin-top: 5%;
  cursor: pointer;
`;
