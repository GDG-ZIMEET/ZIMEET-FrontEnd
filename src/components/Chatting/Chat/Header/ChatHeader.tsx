import React from 'react';
import * as S from './Styles';

interface ChatHeaderProps {
  onBackClick: () => void;
  onHamburgerClick: () => void;
  chatRoomName?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onBackClick, onHamburgerClick, chatRoomName }) => {
  return (
    <S.Header>
      <S.BackButton onClick={onBackClick} />
      <S.ChattingTitle>{chatRoomName} 팀</S.ChattingTitle>
      <S.Hamburger onClick={onHamburgerClick} />
    </S.Header>
  );
};

export default ChatHeader;
