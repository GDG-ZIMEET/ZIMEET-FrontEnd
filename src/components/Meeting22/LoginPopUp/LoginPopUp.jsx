import React from 'react';
import * as S from './Styles'; 

const Popup = ({ message, onClose }) => {
  return (
    <S.PopupContainer>
      <S.MessageContainer>{message}</S.MessageContainer>
      <S.Button onClick={onClose}>간편한 로그인으로 시작하기</S.Button>
    </S.PopupContainer>
  );
};

export default Popup;