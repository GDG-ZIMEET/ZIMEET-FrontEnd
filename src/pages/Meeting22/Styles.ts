import styled from 'styled-components';

export const Meeting22Layout = styled.div<{ $isLoggedIn: boolean }>`
  padding: 6% 3% 0;
  background-color: #FFFFFF;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ $isLoggedIn }) =>
    !$isLoggedIn &&
    `
    pointer-events: none;  
    filter: blur(5px); 
  `}
`;


export const Meeting22Title = styled.div`
  font-size: 15px;
  color: #000000;
  font-weight: 700;
`;


export const Meeting22Container = styled.div`
  flex: 1;
`;