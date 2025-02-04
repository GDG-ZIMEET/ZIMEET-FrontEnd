import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const AccountCopyLayout = styled.div`
  width: 100%;
  height: 9%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
  margin: 3% 0 2%;
`;

export const LogoComponent = styled.svg`
  width: 9%;
  height: 60%;
`;

export const Title = styled.h2`
  font-size: 17px; 
  font-weight: bold;
  color: #000000;
  margin-left: 2%;
`;

export const CopyButton = styled.button`
  background: #EC4452;
  border: none;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  color: white;
  font-weight: 600;
  height: 60%;
  width: 25%;
  line-height: normal;
`;