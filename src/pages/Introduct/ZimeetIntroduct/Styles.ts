import styled from 'styled-components';
import * as I from '../../../assets/Icons';
import { ReactComponent as Heart3D } from '../../../assets/icon/booth/Heart3D.svg';
import { ReactComponent as Hi3D } from '../../../assets/icon/booth/Hi3D.svg';
import { ReactComponent as Chat3D } from '../../../assets/icon/booth/Chat3D.svg';

export const ZimeetIntroductLayout = styled.div`
  width: 100%;
  height: 100%; 
  background-color: #ffffff;
  padding-bottom: 10%;
`;

export const ZimeetContainer = styled.div`
  width: 100%;
  height: 83%;
  overflow: auto;
`;  


export const Zimeet = styled(I.Zimeet)`
    height: 3%;
    margin: 5% 0 0 5%;
`;

export const Explanation1 = styled.div`
  font-size: 15px;
  color: #000000;
  margin: 3% 3% 0 5%;
  line-height: 1.5;
`;

export const Explanation2 = styled.div`
  font-size: 12px;
  color: #000000;
  margin: 3% 3% 0 5%;
  line-height: 2.0;
`;

export const IntroductComponent = styled.div`
  width: 90%;
  height: 26%;
  overflow: auto;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #000000;
  margin: 3% auto; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 37%
  ;}}
`;

export const IntroductTitle = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 4%;
`;

export const Introduct = styled.div`
  font-size: 12px;
  color: #000000;
  line-height: 1.5;
  text-align: center;

  b {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const Heart3d = styled(Heart3D)`
  width: 30%;
  height: 30%;
  margin-bottom: 4%;
`;

export const Hi3d = styled(Hi3D)`
  width: 30%;
  height: 30%;
  margin-bottom: 4%;
`;

export const Chat3d = styled(Chat3D)`
  width: 30%;
  height: 30%;
  margin-bottom: 4%;
`;






