import React from 'react';
import * as S from './Styles';

interface ChatSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  uniqueUsers: { avatar: string; user: string }[];
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ isOpen, toggleSidebar, uniqueUsers }) => {
  return (
    <>
      <S.SidebarOverlay isOpen={isOpen} onClick={toggleSidebar} />
      <S.Sidebar isOpen={isOpen}>
        <S.SidebarContent>
          <S.SidebarTitle>채팅방</S.SidebarTitle>
          <S.UserList>
            {uniqueUsers.map((user, index) => (
              <S.UserItem key={index}>
                <S.Avatar show={true} isSidebar={true}>{user?.avatar}</S.Avatar>
                <S.UserName>{user?.user}</S.UserName>
              </S.UserItem>
            ))}
          </S.UserList>
        </S.SidebarContent>
      </S.Sidebar>
    </>
  );
};

export default ChatSidebar;
