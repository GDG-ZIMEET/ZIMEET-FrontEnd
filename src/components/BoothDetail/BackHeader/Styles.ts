import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const HeaderLayout = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BackButton = styled(I.Back)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  margin-left: 3%;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 12px; 
  color: #000000;
  margin-left: auto; 
  margin-right: 3%;
`;