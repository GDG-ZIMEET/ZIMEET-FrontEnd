import { padding } from 'polished';
import styled from 'styled-components';

export const CreateTeamButton = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center;  
  background-color: #EA4335;
  width: 90%;
  height: 83%;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ffffff;
  }

  &:active {
    background-color: #ffffff;
  }
`;

export const CreateTeamLayOut = styled.div`
  display: flex;
  height: 8.5%;
  margin-top: 3%;
  margin-bottom: 3%;
  justify-content: center; 
  align-items: center;     
`; 
