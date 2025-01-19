import styled from 'styled-components';

export const TeamBoxLayOut = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  gap: 1%;
  height: 70%;
  background-color:# F2F2F2;
  overflow-y: auto; 

  scrollbar-width: none; 

  &::-webkit-scrollbar {
  display: none; 
  }
`;
