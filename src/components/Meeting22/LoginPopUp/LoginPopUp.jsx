import React from 'react';
import * as S from './Styles'; 

const Popup = ({ onClose }) => {
  return (
    <S.BlurBackground>
      <S.PopupContainer>
        <S.MessageContainer>
          ZI밋에서 지금 바로 미팅하려면,<br />
          로그인이 필요해요!
        </S.MessageContainer>
        <S.Button onClick={onClose}>간편한 로그인으로 시작하기</S.Button>
      </S.PopupContainer>
    </S.BlurBackground>
    
  );
};

export default Popup;