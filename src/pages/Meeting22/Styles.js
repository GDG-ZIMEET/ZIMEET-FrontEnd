import styled from 'styled-components';

export const Meeting22Container = styled.div`
  padding: 6% 5% 0 5%;
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

export const Meeting22Title = styled.div`
  width:85%;
  font-size: 15px;
  color: #000000;
  font-weight: 700;
  line-height: 30px;
  margin-left: 4%;
`;
