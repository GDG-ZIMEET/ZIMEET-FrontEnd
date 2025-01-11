import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const ZimeetIntroductLayout = styled.div`
  width: 100%;
  height: 100vh; 
  overflow: auto;
  background-color: #ffffff;
`;


export const Zimeet = styled(I.Zimeet)`
    height: 3%;
    margin: 9% 0 0 5%;
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
  justify-content: center; // 세로 중간 배치
  align-items: center; // 가로 중간 배치
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
`;

export const Icon3D = styled.div`
  width: 30%;
  height: 30%;
  margin-bottom: 4%;
  border: 1px solid red;
`;






