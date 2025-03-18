import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const AccountCopyLayout = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
  margin: 3% 0 2%;
  font-family: Pretendard, sans-serif;
`;

export const LogoWrapper = styled.div`
  width: 9%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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