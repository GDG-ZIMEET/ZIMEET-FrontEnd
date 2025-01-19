import React from 'react';
import * as S from './Styles';

interface ChatHeaderProps {
  onBackClick: () => void;
  onHamburgerClick: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onBackClick, onHamburgerClick }) => {
  return (
    <S.Header>
      <S.BackButton onClick={onBackClick} />
      <S.ChattingTitle>만나서 놀아요! 팀</S.ChattingTitle>
      <S.Hamburger onClick={onHamburgerClick} />
    </S.Header>
  );
};

export default ChatHeader;
