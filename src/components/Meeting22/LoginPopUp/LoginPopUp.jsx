import React, { useEffect } from 'react';
import * as S from './Styles';
import { track } from '@amplitude/analytics-browser';

const Popup = ({ onClose }) => {
    useEffect(() => {
        track('[접속]미팅_로그인모달');
    }, []);

    const handleLoginClick = () => {
        track('[클릭]미팅_로그인모달_로그인버튼');
        onClose();
    };

  return (
    <S.BlurBackground>
      <S.PopupContainer>
        <S.MessageContainer>
          ZI밋에서 지금 바로 미팅하려면,<br />
          로그인이 필요해요!
        </S.MessageContainer>
        <S.Button onClick={handleLoginClick}>간편한 로그인으로 시작하기</S.Button>
      </S.PopupContainer>
    </S.BlurBackground>
    
  );
};

export default Popup;