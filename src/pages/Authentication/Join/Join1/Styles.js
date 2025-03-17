import styled from 'styled-components';
import * as I from '../../../../assets/Icons';

export const JoinLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 5%;
  overflow:hidden;
`;


//정보 입력
export const JoinContainer = styled.form`
  height: 87%;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: Pretendard;
  padding: 8% 0 2% 0;
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const JoinText = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 2%;
`;

export const JoinInput = styled.input`
  width: 100%;
  height: 7.5%;
  background-color: #f9fafb;
  border: 1px solid rgba(2, 32, 71, 0.05);
  border-radius: 0.6rem;
  margin-bottom: 9%;
  font-size: 14px;

  &:focus {
    background-color: white;
    border: 1px solid #022047;
  }

  &:not(:placeholder-shown) {
    background-color: white;
    border: 1px solid #022047;
  }

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    font-size: 16px;
  }
`;

//드롭다운 
export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7.5%;
  margin-bottom: 10%;
`;
export const SelectBox = styled.div`
  width: 35%; 
  height: 100%;
  display: flex;
  align-items: center;
`;

export const JoinSelect = styled.select`
  width: 63%; 
  height: 100%;
  border: 1px solid #aaaaaa;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? '#022047' : '#aaaaaa')};
  color: #022047;
  border-radius: 0.6rem;
  margin: 0;
  display: flex;
`; 
export const SelectText = styled.p`
  font-size: 16px;
  margin-left: 3%;
  display: flex;
  align-items: center;
`;

export const SelectComment = styled.p`
  font-size: 16px;
  color: #B0B0B0;
  display: flex;
  align-items: center;
`;

//성별
export const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7.5%;
  margin-bottom: 8%;
`;
export const GenderButton = styled.button`
  width:  48%;
  background-color: ${({ selected }) => (selected ? '#000000' : 'rgba(0, 0, 0, 0.05)')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.6rem;
  font-weight: 600;
  cursor: pointer;
`;

//버튼
export const BtnContainer = styled.div`
  width: 100%;
  height: 14%;
`;
export const BtnText = styled.p`
  text-align: center;
  font-size: 12px;
  margin-bottom: 2%; 
  font-family: Pretendard;
`;
export const JoinBtn = styled.button`
  font-weight: 700;
  width: 100%;
  height: 65%;
  font-size: 16px;
  background-color: ${({ disabled }) => (disabled ? '#ececec' : '#ea4335')};
  border-radius: 0.6rem;
  margin-bottom: 2%;
  color: ${({ disabled }) => (disabled ? '#7c7c7c' : 'white')};
`;

//에러메세지
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin: -7% 0 6% 3%;
`;