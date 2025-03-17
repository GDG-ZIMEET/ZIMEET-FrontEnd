import styled from 'styled-components';

export const JoinContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 5%;
`;

export const TopBarContainer = styled.div`
  overflow: hidden;
  padding-bottom: 5%;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

export const BackBtn = styled.button`
  font-size: 20px;
  cursor: pointer;
  font-family: Pretendard;
  font-weight: 700;
  padding: 0;
`;

export const TopBarText = styled.p`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 15px;
  padding-top: 2%;
  padding-left: 5%;
`;

export const Wrapper = styled.form`
  font-family: Pretendard;
  height: 100%;
  overflow-y: scroll;
`;

export const EmojiContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5% 3%;
  justify-content: center;
  padding-bottom: 40%;
`;

export const CircleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8%;
  width: 100%; 
  height: auto;
`;

export const EmojiWrap = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({ $isSelected }) => ($isSelected ? 'rgba(234,67,53,0.1)' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  border-radius: 50%; 
  box-shadow: ${({ $isSelected }) => ($isSelected ? '0 0 3px red' : '0 0 3px rgba(0, 0, 0, 0.2)')};
  transition: all 0.3s ease; /* 애니메이션 */
`;

export const TossEmoji = styled.div``;

export const BtnContainer = styled.div`
  padding: 10% 0;
  height: 28%;
`;

export const JoinBtn = styled.button`
  font-weight: 700;
  width: 100%;
  height: 40%;
  background-color: #ea4335;
  border-radius: 0.6rem;
  margin: 25% 0 20% 0;
  color: white;
`;
