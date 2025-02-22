import styled from 'styled-components';
import { JoinLayout ,JoinContainer, JoinText, JoinInput,SelectContainer } from '../Join1/Styles';

export { JoinLayout,  JoinContainer, JoinText, JoinInput,SelectContainer};

export const JoinSelect = styled.select`
  width: 100%; 
  height: 100%;
  background-color: white;
  border: 1px solid #aaaaaa;
  color: #000;
  border-radius: 0.6rem;
  margin: 0;
  display: flex;
`; 

export const EmojiContainer = styled.div`
  height: 40%;
`;

export const EmojiText = styled.p`
  font-size: 12px;
  color: #707070;
  padding: 1% 0;
  font-family: Pretendard;
  line-height: 1.5;
`;
export const CircleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 70%;
`;
export const EmojiWrap = styled.div`
  width: 28%; 
  aspect-ratio: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; 
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;

export const TossEmoji = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  img {
    width: 85%;}
    
`;

export const BtnContainer = styled.div`
  height: 25%;
  margin-top: 5%;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    margin: 0;
  }
`
export const JoinBtn = styled.button`
  font-weight: 700;
  width: 100%;
  height: 36%;
  font-size: 16px;
  background-color: ${({ disabled }) => (disabled ? '#ececec' : '#ea4335')};
  border-radius: 0.6rem;
  margin: 30% 0 0 0;
  color: ${({ disabled }) => (disabled ? '#7c7c7c' : 'white')};

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 38%;
    margin: 17% 0 0 0;
  }
`;

//에러메세지
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin: -7% 0 6% 3%;
`;