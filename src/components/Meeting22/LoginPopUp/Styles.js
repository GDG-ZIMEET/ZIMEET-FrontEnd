import React from 'react';
import styled from 'styled-components';

export const PopupContainer = styled.div`
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  position: fixed;
  width: 76%;
  height: 19.5%;
  color: #FFF;
  top: 50%;
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
`; 

export const MessageContainer = styled.div`
  width: 58%;
  height: 30%;
  margin: 3%;
`;

export const Button = styled.button`
  width: 83%;
  height: 27%;
  color: #fff;
  border-radius: 10px;
  background: #EA4335;
  cursor: pointer;

`;