import React from 'react';
import * as S from './StylesModal';
import * as amplitude from '@amplitude/analytics-browser';

const Modal = ({ onClose }) => {
  React.useEffect(() => {
    amplitude.track('[접속]회원가입_완료모달');
  }, []);

  const handleClose = () => {
    amplitude.track('[클릭]회원가입_완료모달_닫기');
    onClose();
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.Emoji />
        <S.Title>ZI밋에 온 걸 환영해요!</S.Title>
        <S.Text>지금 올라와있는 이성 팀들을 바로 확인해보세요!👀</S.Text>
        <S.Text>ZI밋에서는 모든 분께 기회가 열려있답니다!</S.Text>
        <S.CloseButton onClick={handleClose}>닫기</S.CloseButton>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default Modal;
