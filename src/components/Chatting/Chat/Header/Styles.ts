import { styled } from "styled-components";
import * as I from "../../../../assets/Icons";

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
  z-index: 3;
  top: 0;
  background-color: #ffffff;
  border-bottom: 2px solid #EFEFEF;
`;

export const BackButton = styled(I.Back)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const ChattingTitle = styled.h1`
  font-size: 15px; 
  font-weight: bold;
  color: #000000;
  margin-left: 1%; 
`;

export const Hamburger = styled(I.Hamburger)`
  margin-left: auto;
  cursor: pointer;
`;