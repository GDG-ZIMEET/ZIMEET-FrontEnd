import styled from 'styled-components';

export const JoinLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow:hidden;
`;

export const EmojiContainer = styled.div`
  height: 80%;
  width: 92%;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5% 3%;
  justify-content: center;
  margin: 0 auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
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
  transition: all 0.3s ease;
`;

export const TossEmoji = styled.div``;

export const BtnContainer = styled.div`
  margin-top: 5%;
  height: 7.5%;
  width: 92%;
  margin: 5% auto 0 auto;
`;

export const JoinBtn = styled.button`
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: #ea4335;
  border-radius: 0.6rem;
  color: white;
`;
