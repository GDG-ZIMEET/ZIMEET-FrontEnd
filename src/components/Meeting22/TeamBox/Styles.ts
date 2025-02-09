import styled from 'styled-components';

export const TeamBoxLayOut = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 86%;
  width: 100%;
  padding-bottom: 1%;
  background-color: #FFFFFF;
  overflow-y: auto;
  justify-content: center;
  scrollbar-width: none; 
  &::-webkit-scrollbar {
  display: none; 
  }
`;
