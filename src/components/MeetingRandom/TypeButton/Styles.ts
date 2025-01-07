import styled, { css } from 'styled-components';

export const TypeLayout = styled.div`
  display: flex;
  height: 7.5%;
  padding: 1% 0 0 0;
`;

export const TypeComponent = styled.div`
  padding: 4% 1.7% 1% 0;
  width: 18%
`;

const buttonStyles = css<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? 'black' : '#F2F2F2')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px; 
  cursor: pointer;
  border: none;
  border-radius: 6px;
  height: 100%;
  width: 100%; 
  white-space: nowrap;

  &:hover {
    background-color: ${({ selected }) => (selected ? 'black' : '#ddd')};
  }
`;

export const Twoto2 = styled.button<{ selected: boolean }>`
  ${buttonStyles}
`;

export const Threeto3 = styled(Twoto2)``;

export const Random = styled(Twoto2)``;

export const lookComponent = styled.div`
  font-size: 12px;
  color: #333;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end; 
  flex-grow: 1;
  padding-bottom: 1%;
`;

export const lookword = styled.span`
  color: black;
  margin-right: 1%;
  white-space: nowrap;
`;