import styled from 'styled-components';

export const MakingButtonLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -24%;
  height: 8%;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    margin-top: -23.5%;
    height: 10%;
  }}
`;

export const TwoLimitText = styled.div<{ $situation: number }>`
  font-size: 12px;
  color: #000000;
  margin-bottom: 1%;
  visibility: ${({ $situation }) => ($situation === 5 ? 'visible' : 'hidden')};
`;

export const SituationBox = styled.div<{ $situation: number }>`
  width: 88%;
  height: 100%;
  background-color: ${({ $situation }) => ($situation === 5 ? '#EA4335' : '#ECECEC')};
  color: ${({ $situation }) => ($situation === 5 ? 'white' : '#7C7C7C')};
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