import React from 'react';
import * as S from './Styles';
import HeartMail from '../../../../assets/icon/TeamInfo/HeartMail.svg';

const Send = ({ onClose}) => {
  return (
    <S.Modallayout>
      <S.ModalContent>
        <S.ModalTitle>하이를 보냈어요!<S.HeartIcon src={HeartMail}/></S.ModalTitle>
        <S.ModalText>
          하이가 수락되면 채팅이 열렸다는 알림을 보내드려요!<br />
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
