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
`;

export const LogoText = styled.p`
  font-size: 14px;
  color: #707070;
  padding: 2% 0;
`;

export const JoinForm = styled.form`
  font-family: Pretendard;
  padding: 10% 0;
`;

export const JoinText = styled.p`
  font-weight: 700;
  font-size: 14px;
  padding: 1% 0;
`;

export const JoinInput = styled.input`
  width: 100%;
  height: 2.5rem;
  background-color: #f9fafb;
  border: 1px solid rgba(2, 32, 71, 0.05);
  border-radius: 0.6rem;
  margin-bottom: 10%;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const JoinSelect = styled.select`
  width: 100%;
  height: 2.5rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 0.6rem;
  margin-bottom: 10%;
`;

export const EmojiContainer = styled.div``;

export const EmojiText = styled.p`
  font-size: 12px;
  color: #707070;
  padding: 1% 0;
`;
export const CircleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;
export const EmojiWrap = styled.div`
  width: 5rem;
  height: 5rem; 
  border-radius: 50%; 
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
`;
export const TossEmoji = styled.p``;
export const JoinBtn = styled.button`
  font-weight: 700;
  width: 100%;
  height: 2.7rem;
  background-color: ${({ disabled }) => (disabled ? '#ececec' : '#ea4335')};
  border-radius: 0.6rem;
  margin: 20% 0 5% 0;
  color: ${({ disabled }) => (disabled ? '#7c7c7c' : 'white')};
`;
