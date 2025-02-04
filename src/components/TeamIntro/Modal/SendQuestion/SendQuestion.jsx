import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import Send from '../Send/Send';  

const SendQuestion = ({ onClose, onConfirm }) => {
  const [showSendQuestion, setShowSendQuestion] = useState(true);  

  const handleConfirm = () => {
    setShowSendQuestion(false);  
    onConfirm();  
  };

  const handleClose = () => {
    setShowSendQuestion(false);  
    onClose();  
  };


  return (
    <>
      {showSendQuestion && (
        <S.Modallayout>
          <S.ModalContent>
            <S.ModalTitle>직전학기A+ 팀에게 하트를 보낼까요?</S.ModalTitle>
            <S.ModalText>
              우리팀이 보낸 하트를 수락하면 채팅방이 열려요!<br />
              하이는 우리 팀 하이 개수에서 차감되고,<br />
              보낸 하이는 취소할 수 없어요.
            </S.ModalText>
            <S.TicketCount>우리 팀의 하이 : 2개</S.TicketCount>
            <S.ButtonBox>
              <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
              <S.ConfirmButton onClick={handleConfirm}><S.HiText>Hi</S.HiText> 보내기</S.ConfirmButton>
            </S.ButtonBox>
          </S.ModalContent>
        </S.Modallayout>
      )}
    </>
  );
};

export default SendQuestion;
