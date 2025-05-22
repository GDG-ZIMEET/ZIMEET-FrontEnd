import styled from 'styled-components';

export const TicketCount = styled.div<{ $isRandomLoading: boolean }>`
  font-size: 12px;
  color: ${({ $isRandomLoading }) => ($isRandomLoading ? '#FFFFFF' : '#000')};
  align-self: center;
  font-weight: bold;
  margin-top: 1%;
  background-color: ${({ $isRandomLoading }) => ($isRandomLoading ? '#FFFFFF' : '#F2F2F2')};
  height: 4%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
      width: 25%;
    }
  }

  @media (max-width: 350px) and (max-height: 600px) {
    font-size: 9px;
  }
`;