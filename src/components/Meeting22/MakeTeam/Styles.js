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
    background-color: #D1352D;
  }

  &:active {
    background-color: #B12F24;
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
export const CreateTeamBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  width: 90%;
  height: 83%;
  border-radius: 10px;
  border: 1px solid #ADADAD;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px     
`; 


export const TeamBox = styled.div`
  padding:3%;
`; 