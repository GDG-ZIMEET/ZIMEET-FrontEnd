import styled from 'styled-components';

export const MakeTeamLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18% 0 0 0; 
  height: 55%;
`;

export const TeamRow = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: space-between; 
`;

export const GirlComponent = styled.div.attrs<{ show: boolean }>(({ show }) => ({
  style: {
    visibility: show ? 'visible' : 'hidden',
  },
}))<{ show: boolean }>`
  font-size: 15px;
  color: #000000;
  margin-bottom: 2%;
  font-weight: bold;
  align-self: flex-start;
`;

export const BoyComponent = styled.div.attrs<{ show: boolean }>(({ show }) => ({
  style: {
    visibility: show ? 'visible' : 'hidden',
  },
}))<{ show: boolean }>`
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
  margin: 8%;
  align-self: center;
`;