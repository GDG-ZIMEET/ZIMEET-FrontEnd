import { styled } from "styled-components";
import * as I from "../../../../assets/Icons";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
`;

export const BackButton = styled(I.Back)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Title = styled.h2`
  font-size: 15px; 
  font-weight: bold;
  color: #000000;
  margin-left: 1%; 
`;