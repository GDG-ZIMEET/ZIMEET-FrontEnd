import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button<{ isRoading: boolean }>`
  background-color: ${({ isRoading }) => (isRoading ? '#F2F2F2' : '#000000')};
  color: ${({ isRoading }) => (isRoading ? '#909090' : 'white')};
  font-weight: bold;
  border: none;
  font-size: 17px;
  border-radius: 10px; 
  cursor: pointer;
  margin: 3% 0;
  height: 7%;

  &:hover {
    background-color: ${({ isRoading }) => (isRoading ? darken(0.1, '#F2F2F2') : darken(0.1, '#000000'))}; 
  }
`;