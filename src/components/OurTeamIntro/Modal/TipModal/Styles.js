
import styled from 'styled-components';
import WhiteGo from '../../../../assets/icon/TeamInfo/whiteGo.svg?react';

export const TipLayOut = styled.div`
  display: flex;
  align-items: center;
  background-color: #212121;
  border-radius: 13px;
  box-sizing: border-box;
  width: 88%;
  height: 8.5%;
  margin-top: 3%;
  margin-bottom: 5%;
  position: absolute;  
  bottom: 10%;
  left: 6%;
`;

export const TipImageStyled = styled.img`
  width: 15%;
  margin: 0 3% 0 3%;

`;

export const TipWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  width: 100%;
`;
export const TipText1 = styled.div`
  color: #FFF;
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
  width: 100%;
  margin-bottom: -3.5%;
  span {
    margin-left: 33%;
    color: #FFF;
    font-size: 12px;
    font-weight: 400;
  }

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    span { margin-left: 42%; }
    margin-bottom: -4%;
  }
`;
export const TipText2 = styled.div`
  color: #FFF;
  font-size: 12px;
  font-weight: 400;
  line-height: 30px;
`;

export const WhiteGoIcon = styled(WhiteGo)`
  height: 8%;
`;