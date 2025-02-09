import styled from 'styled-components';

export const CreateTeamButton = styled.button`
  display: flex;
  justify-content: center; 
  align-items: center;  
  background-color: #EA4335;
  width: 94%;
  height: 100%;
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
  width: 94%;
  height: 85%;
  border-radius: 10px;
  border: 1px solid #ADADAD;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px     
`; 


export const TeamBox = styled.div`
  padding-left: 3%;
  height: 100%;
  display: flex;
  align-items: center;
  width: 70%;
`; 

export const Emoji = styled.div`
  font-size: 14px;
  height: 70%;
  margin-right: -2%;
  border-radius: 50%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(234, 67, 53, 0.08);
`;

export const TeamName = styled.span`
  font-size: 13px; 
  font-weight: 700;
  font-family: 'Pretendard';
  color: #000000; 
  margin-left: 5%;
`;