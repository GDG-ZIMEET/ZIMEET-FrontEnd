import styled from 'styled-components';
import NextWhite from '../../../assets/icon/MyPage/GoButtonWhite.svg?react';
import * as I from '../../../assets/Icons';

export const EventContainer = styled.div`
  width: 90%; 
  height: 9%;
  margin: 3% auto 0 auto;
  background-color: black;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
      height: 9.8%;
      margin: 9% auto 0 auto;
    }
  }

  @media (max-width: 350px) and (max-height: 600px) {
    margin-top: 4%;
  }
`;

export const EventLogo = styled.div`
  width: 15%;
  margin-left: 3.5%;
  margin-right: 3.5%;
`;

export const ZimeetLogo = styled(I.ZimeetLogo) `
  width: 100%;
  height: 100%;
`;

export const EventText = styled.div`
  color: white;
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  padding: 1.5% 0;
  white-space: nowrap;
  margin-right: 8%;

  b{
    font-weight: 700;
  }

  h1 {
    font-weight: 700;
    font-size: 14px;

    @media (max-width: 350px) and (max-height: 600px) {
    font-size: 12px;
  }
  }

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
      margin-right: 19%;
    }
  }

  @media (max-width: 350px) and (max-height: 600px) {
    font-size: 10px;
  }
`;
export const MoveBtn = styled(NextWhite)`
  margin-bottom: 7%;
  margin-left: auto;
  margin-right: 4%;

  @media (max-width: 350px) and (max-height: 600px) {
    margin-right: 1.5%;
    height: 12px;
  }
`;