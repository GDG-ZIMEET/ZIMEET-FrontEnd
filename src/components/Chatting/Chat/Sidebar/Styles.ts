import { styled } from "styled-components";
import chatout from "../../../../assets/icon/Chatting/chatout.svg";

export const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
`;

export const SidebarOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  z-index: 1000;
`;


export const SidebarContent = styled.div`
  font-weight: bold;
  width: 100%;
  height: 100%;
`;

export const SidebarTitle = styled.p`
  font-size: 14px;
  height: 8%;
  padding-left: 5%;
  margin-bottom: 12%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #000;
`;


export const UserList = styled.div`
  height: 80%;
`;

export const TeamName = styled.p<{ $isour: boolean }>`
  font-size: 12px;
  margin-left:  5%;
  margin-top: ${({ $isour }) => ($isour ? '15%' : '0%')};
  height: 8%;
  display: flex;
  align-items: center;
  color: #000;
  font-family: 'Pretendard', sans-serif;
`;


export const UserItem = styled.div`
  font-size: 15px;
  height: 8%;
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  font-size: 12px;
  width: 70%;
  display: flex;
  font-family: 'Pretendard', sans-serif;
  justify-content: space-between;
  align-items: center;
  
  &::after {
    font-size: 20px;
    content: ' >';
    margin-bottom: 1%;
    color: #000000; 
  }
`;


export const Avatar = styled.div `
  width: 12%;
  border-radius: 50%;
  background-color: rgba(234, 67, 53, 0.08);
  display: flex;
  align-items: center;
  justify-content: center; 
  aspect-ratio:1;
  margin:  0 3% 0 5%;
  img{
    width: 60%;
  }
`;

//채팅방나가기
export const ChatRoomoutContainer = styled.div`
  height: 10%;
  display: flex;
  pointer: cursor;
`;

export const Chatroom = styled.p`
  font-size: 12px;
  color: #000;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 4%;
  font-family: 'Pretendard';

`;

export const Chatout = styled.img.attrs({
  src: chatout
})`
  width: 8%;
  height: 100%;
  margin-left: 6%;
`;
