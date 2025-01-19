import styled from 'styled-components';

export const PeoplePlusButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 23%;
  margin-top: 2%;
  align-items: center;
`;


export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 2% 0 2% 6%;
  align-self: flex-start;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 12px;
    }
  }
`;


export const Description = styled.div`
  font-size: 12px;
  color: #000000;
  margin: 0 0 2% 6%;
  align-self: flex-start;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 10px;
    }
  }
`;

export const PlusTeamBox = styled.div`
  width: 88%;
  height: 42%;
  background-color: rgba(234, 67, 53, 0.08);
  color: #EA4335;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      height: 55%;
      font-size: 14px;
    }
  }
`;


