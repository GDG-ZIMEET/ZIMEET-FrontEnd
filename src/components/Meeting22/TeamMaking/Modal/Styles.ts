import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  background: white;
  border-radius: 8px;
  z-index: 1001;
  padding: 5%;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 14px;
    }
  }
`;


export const Description = styled.p`
  font-size: 12px;
  color: #000000;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 12px;
    }
  }
`;

export const DropBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 8%;
  margin-top: 8%;
`;

export const Select = styled.select`
  width: 24%;
  height: 100%;
  margin-right: 2%;
  padding: 1%;
  border-radius: 10px;
  background: #494949;
  color: white;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      width: 20%;
    }
  }
`;

export const Input = styled.input`
  padding: 2%;
  flex: 1;
  border-radius: 10px;
  background: #F9FAFB;
  border: 1px solid rgba(2, 32, 71, 0.05);
  color: #8B95A1;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 16px;
    }
  }
`;
export const SearchButton = styled.button`
  height: 100%;
  width: 14%;
  margin-left: 2%;
  background-color: #494949;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12px;
`;

export const AddFriendButton = styled.button`
  position: absolute;
  width: 88%;
  bottom: 6%;
  background: #000000;
  color: white;
  border: none;
  padding: 5%;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

`;

export const ConfirmationText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin-top: 10%;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 14px;
    }
  }
`;

export const SearchUserList = styled.div`
  list-style: none;
  padding: 0;
`;

export const FriendInfo = styled.div<{ $isSelected: boolean }>`
  height: 7%;
  font-size: 12px;
  color: #000000;
  margin-bottom: 3%;
  padding: 5%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 170, 71, 0.1);
  background-color:'rgba(0, 170, 71, 0.1)';
  border:  ${({ $isSelected }) => $isSelected ? '1px solid black' : 'none'};
  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 12px;
    }
  }
`;

