import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  onClose: () => void;
  onConfirm: () => void;
  ticket: number | null;
}

const Modal: React.FC<ModalProps> = ({ onClose, onConfirm, ticket }) => {
  const navigate = useNavigate();


  return (
    <S.Modallayout>
      <S.ModalContent>
        <S.ModalTitle>랜덤 미팅 안내사항</S.ModalTitle>
        <S.ModalText>
          랜덤 미팅은 3대3으로 누가 들어올지 모르는<br />
          다양하고 재밌는 만남을 위해 진행되고 있어요.<br />
          3대3이 완성되면 <S.HighlightText>바로 채팅이 열리니</S.HighlightText> 참고해주세요!
        </S.ModalText>
        <S.TicketCount>남은 티켓 : 무제한!</S.TicketCount>
        {/*<S.TicketCount>남은 티켓 : {ticket}개</S.TicketCount>*/}
        <S.ButtonBox>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>참여하기</S.ConfirmButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.Modallayout>
  );
};

export default Modal;