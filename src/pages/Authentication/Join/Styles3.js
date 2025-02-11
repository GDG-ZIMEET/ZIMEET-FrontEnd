import styled from 'styled-components';

export const JoinContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 5%;
`;

export const LogoContainer = styled.div`
  overflow: hidden;
  padding-bottom: 5%;
`;

export const Logo = styled.div`
  width: 20%;
  height: 20%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LogoTitle = styled.p`
  font-weight: 700;
  font-size: 17px;
  line-height: 150%;
`;

export const LogoText = styled.p`
  font-size: 14px;
  color: #707070;
  line-height: 150%;
`;

export const JoinForm = styled.form`
  font-family: Pretendard;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 55%;
`;

export const JoinInput = styled.input`
  width: 100%;
  height: 8%;
  background-color: #f9fafb;
  border: 1px solid rgba(2, 32, 71, 0.05);
  border-radius: 0.6rem;
  margin-bottom: 10%;

  &:focus {
    background-color: white;
    border: 1px solid #022047;
  }

  &:not(:placeholder-shown) {
    background-color: white;
    border: 1px solid #022047;
  }
`;

export const HrLine = styled.hr`
  height: 2vh;
  background-color: #f3f3f3;
  border: none;
`;

export const SelectTopContainer = styled.div`
  height: 7%;
`;

export const SelectContainer = styled.div`
  margin-top: 5%;
`;

export const ChooseOne = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  padding-top: 5%;
`;

export const SelectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.5% 1%;
  margin-bottom: 10%;
`;


export const OptionTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
`;
export const OptionText = styled.p`
  font-size: 12px;
  color: #707070;
  line-height: 150%;
  padding-bottom: 1%;
`;

export const SelectButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: ${({ selected }) => (selected ? '#000000' : 'rgba(0, 0, 0, 0.05)')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#000000' : 'rgba(0, 0, 0, 0.05)')};
  }
`;

export const BtnContainer = styled.div`
  height: 9%;
`
export const JoinBtn = styled.button`
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: ${({ disabled }) => (disabled ? '#ececec' : '#ea4335')};
  border-radius: 0.6rem;
  color: ${({ disabled }) => (disabled ? '#7c7c7c' : 'white')};
  margin: 8% 0;
`;