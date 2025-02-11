import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import { getOurHi } from '../../../../api/Meeting/Getouthi';

const SendQuestion = ({ onClose, onConfirm, teamName, teamType }) => {
  const [showSendQuestion, setShowSendQuestion] = useState(true);  
  const [hiCount, setHiCount] = useState(0);

  useEffect(() => {
    const fetchHiCount = async () => {
      try {
        const response = await getOurHi(teamType);
        setHiCount(response.data.hi);
      } catch (error) {
        console.error('Error fetching hi count:', error);
      }
    };

    fetchHiCount();
  }, []);

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
            <S.ModalTitle>{teamName} 팀에게 하트를 보낼까요?</S.ModalTitle>
            <S.ModalText>
              우리팀이 보낸 하트를 수락하면 채팅방이 열려요!<br />
              하이는 우리 팀 하이 개수에서 차감되고,<br />
              보낸 하이는 취소할 수 없어요.
            </S.ModalText>
            <S.TicketCount>우리 팀의 하이 : {hiCount}개</S.TicketCount>
            <S.ButtonBox>
              <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
              <S.ConfirmButton onClick={handleConfirm}>
                <S.Hi /> 
                <S.Text>보내기</S.Text>
              </S.ConfirmButton>
            </S.ButtonBox>
          </S.ModalContent>
        </S.Modallayout>
      )}
    </>
  );
};

export default SendQuestion;
