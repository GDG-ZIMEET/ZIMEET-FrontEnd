import styled, { css } from 'styled-components';

export const TypeLayout = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0.7% 1% 0  0%;
  margin: 3% 0 1% 0;
  height: 5.5%;
`;

export const TypeComponent = styled.div`
  padding: 0.5% 1% 0.5% 0;
  width: 16%;
`;
const buttonStyles = css`
  background-color: #F2F2F2;
  color: black;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-size: 13px; 
  border: none;
  border-radius: 6px;
  height: 100%;
  width: 100%; 
`;

export const Twoto2 = styled.button`
  ${buttonStyles}
`;

export const Threeto3 = styled(Twoto2)``;

export const Random = styled(Twoto2)`
  background-color: black;
  color: white;
`;

