import styled, { css } from 'styled-components';

export const TypeLayout = styled.div`
  display: flex;
  padding: 0.7% 0 0 0;
  height: 7.5%;
`;

export const TypeComponent = styled.div`
  padding: 4% 1.7% 1% 0;
  width: 18%
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

