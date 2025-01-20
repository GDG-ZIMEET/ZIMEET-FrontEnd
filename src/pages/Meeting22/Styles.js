import styled from 'styled-components';

export const Meeting22Container = styled.div`
  padding: 6% 3% 0;
  background-color: #FFFFFF;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column; 
  ${(props) =>
    !props.isLoggedIn &&`
    pointer-events: none;  
    filter: blur(5px);     
  `}
`;

export const Meeting22Title = styled.h1`
    font-size: 15px;
    color: #000000;
    font-weight: bold; 
`;
