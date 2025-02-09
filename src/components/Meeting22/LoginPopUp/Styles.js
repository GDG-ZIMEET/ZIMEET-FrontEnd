import React from 'react';
import styled from 'styled-components';

export const BlurBackground = styled.div`
  position: fixed;
  top: 12.5%;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(2px);
  z-index: 99;
`;

export const PopupContainer = styled.div`
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  position: fixed;
  width: 76%;
  height: 22%;
  color: #FFF;
  top: 45%;
  left: 50%;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background: #000;
  z-index: 1000;
  text-align: center;
  display: flex;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 30%;
  }}
`; 

export const MessageContainer = styled.div`
  width: 100%;
  height: 30%;
  margin: 3%;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Pretendard';
`;

export const Button = styled.button`
  width: 83%;
  height: 27%;
  color: #fff;
  border-radius: 10px;
  background: #EA4335;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Pretendard';
`;