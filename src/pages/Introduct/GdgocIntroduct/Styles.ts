import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const GdgocIntroductLayout = styled.div`
  width: 100%;
  height: 100%; 
  overflow: auto;
  background-color: #ffffff;
`;


export const AboutGdgocCuk = styled(I.AboutGdgocCuk)`
    height: 3%;
    margin: 9% 0 0 3%;

    @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
        margin-left: -3.7%;}}
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

export const BigLogo = styled(I.BigLogo)`
    height: 10%;
    margin-top: 3%;

    @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
        margin-left: -7.3%;}}
`;

export const gdgExplanation1 = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 3% 3% 20% 5%;
  line-height: 1.5;
`;

export const gdgExplanation2 = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 3% 3% 20% 5%;
  line-height: 1.5;
`;

export const gdgExplanation3 = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 3% 3% 0 5%;
  line-height: 1.5;
`;
export const gdgExplanation4 = styled.div`
  font-size: 12px;
  color: #000000;
  margin: 1% 3% 20% 5%;
  line-height: 1.5;
`;




