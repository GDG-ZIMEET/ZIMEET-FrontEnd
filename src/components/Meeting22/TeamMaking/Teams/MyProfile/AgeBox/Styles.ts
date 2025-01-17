import styled from "styled-components";

export const AgeBoxLayout = styled.div`
  height: 75%; 
  margin: 3% 5% 0 2%;
  font-size: 10px;
  color: #000000;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Component = styled.div`
  height: 40%; 
  font-size: 12px;
  color: #000000;
  margin-bottom: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const NAC = styled.div`
  font-size: 12px;

  .bold {
    font-weight: bold;
  }

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    font-size: 10px;
  }}
`;

export const Music = styled.div`
  width: 25%;
  height: 100%;
  font-size: 10px;
  background-color: #F2F2F2;
  border-radius: 20px;
  padding: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-weight: bold;
`;

export const MajorContainer = styled.div`
  height: 50%;
  width: 100%;
`;

export const Major = styled.div`
  font-size: 12px;
  height: 100%;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    font-size: 10px;
  }}
`;