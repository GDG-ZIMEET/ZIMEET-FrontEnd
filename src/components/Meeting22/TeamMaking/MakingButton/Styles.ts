import styled from 'styled-components';

export const MakingButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

export const SituationBox = styled.div`
  width: 88%;
  height: 60%;
  background-color: #ECECEC;
  color: #7C7C7C;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    font-size: 14px;
  }}
`;