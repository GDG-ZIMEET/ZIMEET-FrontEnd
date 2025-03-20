import styled from 'styled-components';

export const BoothLayout = styled.div`
    background-color: #FFFFFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: Pretendard, sans-serif;
`;

export const BoothContainer = styled.div`
    flex: 1;
  `;


export const ColorType = styled.div`
  font-size: 12px;
  color: #949494;
  font-weight: bold;
  margin: 4% 0 0 3%;
  height: 2%;
  font-family: 'Pretendard', sans-serif;
`;

export const Explanation = styled.p`
  font-size: 12px;
  color: #000000;
  margin: 3% 0 0 3%;
  height: 2%;
  underline: #000000;
  b {
    font-weight: bold;
  }
`;

//버전 2 오후 공연 

export const SetListLayout = styled.div`
  height: 85%;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  margin: 0 3% 0 3%;
  background-color: rgba(66, 133, 244, 0.1);
`;

export const SetListContainer = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 flex-direction: column;
 margin: 3%;
`;
export const SetListTitle = styled.div`
  font-size: 16px;
  color: #000000;
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #093d93;
  font-family: 'Pretendard', sans-serif;
  background-color: rgba(66, 133, 244, 0.3);
  border-radius: 10px;
  font-family: 'Pretendard', sans-serif;
  margin-bottom: 2%;
`;

export const SetContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3% 0 3%;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  font-family: 'Pretendard', sans-serif;
  border-radius: 10px;  
`;

export const SetItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.$isActive ? 'rgba(9, 61, 147, 0.5)' : 'rgba(9, 61, 147, 0.1)')};
  color: ${(props) => (props.$isActive ? '#fff' : '#000')};
  border-radius: 10px;
  padding: 5%;
  width: 100%;
  margin: 0 auto 1% auto;
  font-weight: ${(props) => (props.$isActive ? 'bold' : 'normal')};
  transition: all 0.3s ease-in-out;
`;

export const SetTime = styled.div`
  font-size: 16px;
  color: #000000;
  font-family: 'Pretendard', sans-serif;
`;

export const SetTeam = styled.div`
  font-size: 16px;
  color: #000000;
  font-family: 'Pretendard;', sans-serif;
`;