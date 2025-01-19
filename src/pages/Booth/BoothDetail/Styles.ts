import styled from 'styled-components';
import * as I from '../../../assets/Icons';
import PosterExample from '../../../assets/icon/Examplebooth2.png';


export const BoothDetailLayout = styled.div`
  width: 100%;
  height: 100vh; 
  overflow: auto;
  background-color: #ffffff;
`;


export const PosterDetail = styled.img.attrs((props) => ({
  src: PosterExample,
  alt: 'Poster Example',
  onClick: props.onClick,
}))`
  margin-top: 3%;
  width: 80%;
  margin-left: 10.5%;
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


