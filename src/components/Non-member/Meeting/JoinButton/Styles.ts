import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  background-color: #000000;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 17px;
  border-radius: 10px; 
  cursor: pointer;
  margin: 4% 0;
  height: 7%;

  &:hover {
    background-color: darken(0.1, '#000000'); 
  }
`;