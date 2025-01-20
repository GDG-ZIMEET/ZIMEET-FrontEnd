import { padding } from 'polished';
import styled from 'styled-components';
import WhiteHeart from '../../../../assets/icon/TeamInfo/WhiteHeart.svg'

export const HeartButton = styled.button`
  background-color: #EA4335;
  width: 100%;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: #ffffff;
  }

  &:active {
    background-color: #ffffff;
  }
`;

export const HeartLayOut = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 85%;
  height: 6.5%;
  margin-top: 3%;
  margin-bottom: 3%;
  position: absolute;  
  bottom: 10%;
  left: 7.5%;
`;

export const HiText = styled.span`
  color: black;
`;

export const SendText = styled.span`
  color: white;  
`;