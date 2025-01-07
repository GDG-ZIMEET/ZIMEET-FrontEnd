import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const BoothDetailLayout = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border: 1px solid #f2f2f2;  
  background-color: #ffffff;
  padding: 3%;
`;

export const PosterDetail = styled(I.PosterExample)`
  margin-top: 3%;
  width: 100%;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;


