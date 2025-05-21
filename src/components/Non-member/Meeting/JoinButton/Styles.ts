import styled from 'styled-components';

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 8%;
  width: 80%;
  margin-top: 4%;

  @media (max-width: 350px) and (max-height: 600px) {
    height: 12%;
  }
`;

export const Button = styled.button`
  color: white;
  font-weight: bold;
  border: none;
  font-size: 17px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  border-radius: 10px; 
  background-color: #000000;

  &:hover {
    background-color: darken(0.1, '#000000'); 
  }

  @media (max-width: 350px) and (max-height: 600px) {
    font-size: 12px;
  }
`;