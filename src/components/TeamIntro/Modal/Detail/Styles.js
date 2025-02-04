import styled from 'styled-components';

export const DetailLayOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  width: 85%;
  height: 10.5%;
  margin-top: 3%;
  position: absolute;  
  bottom: 18%;
  left: 7.5%;
`;

export const DetailButton = styled.button`
  background-color: #000;
  width: 100%;
  height: 62%;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: #ffffff;
  }

  &:active {
    background-color: #ffffff;
  }
`;



export const TextBox = styled.div`
  display:flex;
  font-size: 12px;
  color: #000;
  font-weight: 400;
`;