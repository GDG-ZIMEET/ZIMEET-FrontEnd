import styled from 'styled-components';
import * as I from 'assets/Icons';

export const MakeTeamLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 94%;
  margin: 5% 0 0 3%;
`;

export const explainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const line1 = styled.div<{ $isRandomLoading: boolean }>`
  font-size: 14px;
  width: 100%;
  color: #000000;
  font-weight: bold;
  opacity: ${({ $isRandomLoading }) => ($isRandomLoading ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  margin-bottom: 2%;
`;

export const Line2 = styled.div<{ $isRandomLoading: boolean }>`
  font-size: 14px;
  width: 100%;
  color: #000000;
  opacity: ${({ $isRandomLoading }) => ($isRandomLoading ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;


export const GirlComponent = styled.div`
  font-size: 15px;
  color: #000000;
  margin-bottom: 2%;
  font-weight: bold;
  align-self: flex-start;
`;

export const TeamRow = styled.div`
  display: flex;
  height: 55%;
  width: 100%;
  justify-content: space-between; 
`;

export const BoyComponent = styled.div`
  font-size: 15px;
  color: #000000;
  margin-bottom: 2%;
  font-weight: bold;
  align-self: flex-start;
`;

export const FirstPerson = styled.div`
  font-size: 40px;
  background-color: #F2F2F2;
  height: 100%; 
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2.5% 0 0;
  border-radius: 9%;
  img {
    width: 58%;
  }
`;

export const SecondPerson = styled(FirstPerson)``;

export const ThirdPerson = styled(FirstPerson)`
  margin-right: 0; 
`;

export const FourthPerson = styled(FirstPerson)``;

export const FifthPerson = styled(FirstPerson)``;

export const SixthPerson = styled(FirstPerson)`
  margin-right: 0;
`;

export const LoadingBefore = styled(I.RandomBefore)`
  margin-top: 2.5%;
  padding: 2% 0 2% 0;
  width: 25%;
  height: 25%;
`;

export const LoadingAfter = styled(I.RandomAfter)`
  margin-top: 2.5%;
  padding: 2% 0 2% 0;
  width: 25%;
  height: 25%;
`;