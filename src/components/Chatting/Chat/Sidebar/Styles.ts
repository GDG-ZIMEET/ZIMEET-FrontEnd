import { styled } from "styled-components";

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
  padding: 8% 6%;
  font-weight: bold;
  width: 100%;
  height: 100%;
`;

export const SidebarTitle = styled.p`
  font-size: 16px;
  margin-bottom: 22%;
`;

export const UserList = styled.div`
  height: 60%;
`;

export const UserItem = styled.div`
  font-size: 15px;
  margin-bottom: 7%;
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  margin: 0 0 5% 4%;
  font-size: 13px;
`;


export const Avatar = styled.div<{ show: boolean; isSidebar?: boolean }>`
  width: ${({ isSidebar }) => (isSidebar ? '30px' : '40px')}; // 사이드바에서는 30px, 화면에서는 40px
  height: ${({ isSidebar }) => (isSidebar ? '30px' : '35px')}; // 사이드바에서는 30px, 화면에서는 35px
  border-radius: 50%;
  margin: 0 1% 7% 1%;
  background-color: rgba(234, 67, 53, 0.08);
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center; 
`;

