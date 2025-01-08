import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const ItemInventoryLayout = styled.div`
  width: 100%;
  height: 27%;
  background-color: #ffffff;
  margin-top: 4%;
  padding-bottom: 4%;
  border-bottom: 4px solid #DEDEDE; 
`;

export const ItemInventoryTitle = styled.h2`
  font-size: 17px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 4%;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
`;

export const ItemComponent = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1%;
`;

export const ItemTitle = styled.h3`
  font-size: 12px;
  color: #000000;
  margin: 0 0 1% 1%;
`;

export const ItemElement = styled.p`
  font-size: 12px;
  color: #000000;
  margin-left: auto;
`;

export const Itemhighlight = styled.span`
  font-weight: bold;
`;

export const Check = styled(I.Check)`
  margin-left: 1%;
`;

export const Account = styled.p`
  font-size: 12px;
  color: #000000;
  text-align: center;
  margin-bottom: 1%;
`;

export const Time = styled.p`
  font-size: 12px;
  color: #000000;
  text-align: center;
`;