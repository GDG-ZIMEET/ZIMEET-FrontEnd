import styled, { css } from 'styled-components';


export const TeamNameLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% 6% 0;
  height: 14%;
`;

export const Title = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 12px;
    }
  }
`;


export const Description = styled.p`
  font-size: 12px;
  color: #000000;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 10px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40%;
  font-size: 14px;
  background-color: #F9FAFB;
  border: 1px solid rgba(2, 32, 71, 0.05);
  border-radius: 10px;
  color: #8B95A1;
`;