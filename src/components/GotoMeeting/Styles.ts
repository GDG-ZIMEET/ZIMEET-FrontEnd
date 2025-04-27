import styled from 'styled-components';
import * as I from '../../assets/Icons';

export const GotoMeetingLayout = styled.div`
  position: fixed;
  width: 67px; 
  height: 67px; 
  background-color: black; 
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 12%;
  right: 5%;
`;

export const ZimeetLogo = styled(I.ZimeetLogo)`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;  
  