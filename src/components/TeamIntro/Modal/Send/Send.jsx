import React from 'react';
import * as S from './Styles';

const Send = ({ onClose}) => {
  return (
    <S.Modallayout>
      <S.ModalContent>
        <S.ModalTitle>하이를 보냈어요!</S.ModalTitle>
        <S.ModalText>
          상대 팀이 하이를 수락하면 채팅이 열리고 알림을 보내드려요!<br />
          알림을 위해 꼭 <S.HighlightText>ZI밋을 홈화면에 추가</S.HighlightText>해주세요!
        </S.ModalText>
        <S.ButtonBox>
          <S.CancelButton onClick={onClose}>닫기</S.CancelButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.Modallayout>
  );
};

export default Send;
