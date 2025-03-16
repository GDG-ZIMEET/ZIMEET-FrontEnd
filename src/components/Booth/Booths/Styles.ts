import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const BoothLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 70%;
  margin: 5% 3% 0 3%;
  justify-content: space-between;
`;

export const NBuilding = styled.div`
  width: 13%;
  height: 100%;
  background-color: #F2F2F2;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const BoothsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
`;

export const BoothTime = styled.div`
  background-color: #F2F2F2;
  border-radius: 5px;
  color: #9C978C;
  font-size: 13px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  margin-bottom: 3%;
`;
export const SquareRL = styled.div`
  width: 13%;
  height: 100%;
`;

export const SquareRLButton = css<{ selected: boolean }>`
  width: 100%;
  height: 50%;
  background-color: ${({ selected }) => (selected ? 'grey' : '#F2F2F2')};
  border-radius: 5px;
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SquareLeft = styled.button<{ selected: boolean }>`
  ${SquareRLButton}
`;

export const SquareRight = styled(SquareLeft)`
  margin-top: 10%;
`;

export const Booths = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: hidden;
  height: 92%;
  scrollbar-width: none; 
`;

export const Booth = styled.div`
  width: 48%;
  height: auto;
  margin-bottom: 5%;
  border-radius: 5px;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => darken(0.1, props.color || '#000')};
  }
`;

export const BoothWho = styled.div`
  color: ${props => props.color};
  font-size: 13px;
  font-weight: bold;
`;

export const BoothTitle = styled.div`
  font-size: 13px;
  margin-top: 5%;
`;

export const Andrea = styled.div`
  width: 13%;
  height: 100%;
  background-color: #F2F2F2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  letter-spacing: 2px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.3;
  position: sticky;
  top: 0;
`;
