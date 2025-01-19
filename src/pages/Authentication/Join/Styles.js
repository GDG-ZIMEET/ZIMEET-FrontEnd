import styled from 'styled-components';

export const JoinContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 5%;
`;

export const LogoContainer = styled.div`
  overflow: hidden;
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
  padding: 2% 0;
`;

export const LogoText = styled.p`
  font-size: 14px;
  color: #707070;
  padding: 1% 0;
`;

export const JoinForm = styled.form`
  height: 100%;
  font-family: Pretendard;
  padding: 10% 0;
`;

export const JoinText = styled.p`
  font-weight: 700;
  font-size: 14px;
  padding: 2% 0;
`;

export const JoinInput = styled.input`
  width: 100%;
  height: 6.5%;
  background-color: #f9fafb;
  border: 1px solid rgba(2, 32, 71, 0.05);
  border-radius: 0.6rem;
  margin-bottom: 10%;
  font-size: 14px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6.5%;
  margin-bottom: 10%;
`;
export const JoinSelect = styled.select`
  width: 48%;
  background-color: #f9fafb;
  border: 1px solid rgba(2, 32, 71, 0.05);
  border-radius: 0.6rem;
`;

export const GenderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6.5%;
  margin-bottom: 5%;
`;
export const GenderButton = styled.button`
  width:  48%;
  background-color: ${({ selected }) => (selected ? 'black' : '#f9fafb')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.6rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
export const BtnContainer = styled.div`
  padding: 10% 0;
  width: 100%; height: 16%;
`;
export const BtnText = styled.p`
  text-align: center;
  font-size: 12px;
  padding: 1% 0;
`;
export const JoinBtn = styled.button`
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: ${({ disabled }) => (disabled ? '#ececec' : '#ea4335')};
  border-radius: 0.6rem;
  margin-bottom: 2%;
  color: ${({ disabled }) => (disabled ? '#7c7c7c' : 'white')};
`;
