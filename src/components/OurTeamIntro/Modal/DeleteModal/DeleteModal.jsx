import React from 'react';
import * as S from './Styles'; 
const DeleteModal = ({ onClose }) => {
  const handleDeleteConfirm = () => {
    onClose(); 
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalTitle>팀을 삭제하시겠어요?</S.ModalTitle>
        <S.ModalText>팀을 삭제할 경우, 팀의 남은 하이는 사라지며<br/>
                     팀에 속해있는 모든 팀원에게서도 팀이 사라져요.<br/>
                     또한, 그동안 이 팀으로 보낸 / 받은 하이들도 사라져요.<br/>
                     팀 삭제 후 다시 만들 수 있는 기회는 앞으로 1번 더 남았어요.
        </S.ModalText>
        <S.ButtonBox>
          <S.CancelButton onClick={onClose}>취소하기</S.CancelButton>
          <S.ConfirmButton onClick={handleDeleteConfirm}>삭제</S.ConfirmButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default DeleteModal;
