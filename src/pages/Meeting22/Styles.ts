import styled from 'styled-components';

export const Meeting22Layout = styled.div`
  padding: 6% 0% 0;
  background-color: #FFFFFF;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


export const Meeting22Title = styled.div`
  font-size: 15px;
  margin-left: 3%;
  color: #000000;
  font-weight: 700;
`;


export const Meeting22Container = styled.div`
  height: 78.5%;
`;

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
`;