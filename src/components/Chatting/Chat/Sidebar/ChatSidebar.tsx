import React from 'react';
import * as S from './Styles';

interface ChatSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  roomId: number;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ isOpen, toggleSidebar, roomId }) => {
  return (
    <>
      <S.SidebarOverlay isOpen={isOpen} onClick={toggleSidebar} />
      <S.Sidebar isOpen={isOpen}>
        <S.SidebarContent>
          <S.SidebarTitle>채팅방</S.SidebarTitle>
          <S.UserList>
            {/* {roomId.map((user, index) => (
              <S.UserItem key={index}>
                <S.Avatar show={true} isSidebar={true}>{user?.avatar}</S.Avatar>
                <S.UserName>{user?.user}</S.UserName>
              </S.UserItem>
            ))} */}
          </S.UserList>
        </S.SidebarContent>
      </S.Sidebar>
    </>
  );
};

export default ChatSidebar;
