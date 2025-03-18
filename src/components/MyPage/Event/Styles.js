import styled from 'styled-components';
import { ReactComponent as NextWhite } from '../../../assets/icon/MyPage/GoButtonWhite.svg';

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
`;
export const EventLogo = styled.div`
  width: 15%;
  margin-right: 3.5%;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const EventText = styled.p`
  color: white;
  font-family: Pretendard;
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
  }

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
      margin-right: 19%;
    }
  }
`;
export const MoveBtn = styled(NextWhite)`
  margin-bottom: 7%;
`;