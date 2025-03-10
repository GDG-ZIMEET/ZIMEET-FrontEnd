import * as S from './StylesModal'; 

const Modal = ({ onClose }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.Emoji />
        <S.Title>ZI밋에 온 걸 환영해요!</S.Title>
        <S.Text>지금 올라와있는 이성 팀들을 바로 확인해보세요!👀</S.Text>
        <S.Text>ZI밋에서는 모든 분께 기회가 열려있답니다!</S.Text>
        <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default Modal;
