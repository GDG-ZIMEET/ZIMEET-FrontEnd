import styled from 'styled-components';
import { JoinLayout,LogoContainer,ZimeetLogo, LogoTitle, LogoText, JoinText} from '../Join/Styles';

export { JoinLayout, LogoContainer, ZimeetLogo, LogoTitle, LogoText, JoinText};

export const JoinContainer = styled.form`
  height: 87%;
  overflow: hidden;
  font-family: Pretendard;
  padding: 8% 0 2% 0;
  
`;

export const JoinInput = styled.input`
  width: 100%;
  height: 8%;
  background-color: #f9fafb;
  border: 1px solid rgba(2, 32, 71, 0.05);
  border-radius: 0.6rem;
  margin-bottom: 10%;
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

export const SelectContainer = styled.div`
  height: 70%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 8%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 70%;
    margin-top: -5%;
    margin-bottom: 5%;
  }
`;

export const HrLine = styled.hr`
  height: 2%;
  background-color: #f3f3f3;
  border: none;
`;

export const SelectTopContainer = styled.div`
  height: 7%;
`;

export const ChooseOne = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin-top: 5%;
`;

export const SelectBox = styled.div`
  height: 31%;
`;

export const SelectAgeBox = styled.div`
  height: 24%;`;

export const SelectGrid = styled.div`
  height: 55%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1%;
  row-gap: 5%;
`;

export const SelectAgeGrid = styled.div`
  height: 33%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1%;
  row-gap: 5%;
`;

export const OptionText = styled.p`
  font-size: 12px;
  color: #707070;
  line-height: 150%;
  padding-bottom: 1%;
`;

export const SelectButton = styled.button`
  height: 40%;
  width: 100%;
  background-color: ${({ selected }) => (selected ? '#000000' : 'rgba(0, 0, 0, 0.05)')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  height: 100%;
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
`;