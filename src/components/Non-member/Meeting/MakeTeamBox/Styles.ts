import styled from 'styled-components';

export const MakeTeamLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1% 0 0 0; 
  height: 53%;
  margin-top: 5%;
`;

export const explainComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const line1 = styled.div<{ showExplain: boolean }>`
  font-size: 14px;
  width: 100%;
  color: #000000;
  font-weight: bold;
  opacity: ${({ showExplain }) => (showExplain ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  margin-bottom: 2%;
`;

export const Line2 = styled.div<{ showExplain: boolean }>`
  font-size: 14px;
  width: 100%;
  color: #000000;
  opacity: ${({ showExplain }) => (showExplain ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
`;


export const GirlComponent = styled.div<{ show: boolean }>`
  font-size: 15px;
  color: #000000;
  margin-bottom: 2%;
  font-weight: bold;
  align-self: flex-start;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

export const TeamRow = styled.div`
  display: flex;
  height: 55%;
  width: 100%;
  justify-content: space-between; 
`;

export const BoyComponent = styled.div<{ show: boolean }>`
  font-size: 15px;
  color: #000000;
  margin-bottom: 2%;
  font-weight: bold;
  align-self: flex-start;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
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
  font-family: 'tossface', sans-serif;

  @media (min-width: 430px) { 
    font-size: 52px;
    height: 16 0%;
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

export const Loding = styled.div`
  font-size: 35px;
  margin-top: 3.5%;
  align-self: center;
`;