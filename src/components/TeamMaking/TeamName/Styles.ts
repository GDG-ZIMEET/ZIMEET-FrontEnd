import styled, { css } from 'styled-components';


export const TeamNameLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% 6% 0;
  height: 12%;
`;

export const Title = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 3%;
`;


export const Description = styled.p`
  font-size: 12px;
  color: #000000;
  margin-bottom: 3%;
`;

export const Input = styled.input<{ $inputcolor: string }>`
  width: 100%;
  height: 40%;
  font-size: 14px;
  background-color: #F9FAFB;
  border: 1px solid ${({ $inputcolor }) => $inputcolor};
  border-radius: 10px;
  color: #8B95A1;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 16px;
    }
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 1% 0 0 1%;
`;