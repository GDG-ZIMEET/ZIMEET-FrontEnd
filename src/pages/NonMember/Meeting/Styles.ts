import styled from 'styled-components';

export const Explanation = styled.div`
  font-size: 15px;
  color: #000000;
  margin-top: 1%;
  height: 3%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard, sans-serif;

  @media (max-width: 350px) and (max-height: 600px) {
    font-size: 12px;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  height: 8%;
  width: 80%;
  margin-top: 4%;
  color: white;
  font-weight: bold;
  border-radius: 10px; 
  background-color: #000000;

  &:hover {
    background-color: darken(0.1, '#000000'); 
  }

  @media (max-width: 350px) and (max-height: 600px) {
    font-size: 12px;
    margin-top: 2%;
  }
`;
