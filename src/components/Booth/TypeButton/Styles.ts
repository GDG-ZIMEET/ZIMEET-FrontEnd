import styled, { css } from 'styled-components';

export const TypeLayout = styled.div`
  display: flex;
  height: 5.5%;
  margin: 2% 0 0 3%; 
  font-family: Pretendard, sans-serif;
`;

export const TypeComponent = styled.div`
  width: 18%;
  margin: 0 1% 0 0;
`;

const buttonStyles = css<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? 'black' : '#F2F2F2')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px; 
  cursor: pointer;
  border: none;
  border-radius: 8px;
  height: 100%;
  width: 100%; 
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ selected }) => (selected ? 'black' : '#ddd')};
  }
`;

export const FrontN = styled.button<{ selected: boolean }>`
  ${buttonStyles}
`;

export const FrontK = styled(FrontN)``;

export const SSquare = styled(FrontN)``;

export const PlayGroud = styled(FrontN)``;

export const Andrea = styled(FrontN)``;

