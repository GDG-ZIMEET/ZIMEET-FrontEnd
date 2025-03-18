import React, { useEffect } from 'react';
import * as S from './Styles';
import { track } from '@amplitude/analytics-browser';

interface ModalProps {
  isclose: () => void;
  isout: () => void;
}

const ExitModal: React.FC<ModalProps> = ({ isclose, isout }) => {
  useEffect(() => {
    track('[접속]채팅_실시간채팅_나가기모달');
  }, []);

  const handleExitClick = () => {
    track('[클릭]채팅_실시간채팅_나가기모달_나가기');
    isout();
  };

  return (
    <S.ModalLayout>
      <S.ModalContent>
        <S.ModalTitle>채팅방을 나가시겠어요?</S.ModalTitle>
        <S.ModalText>
          나간 채팅방은 <S.HighlightText>절대로 다시 들어올 수 없어요</S.HighlightText>.<br />
          또한, 내가 나가더라도 채팅방에 있는 다른 사람들은<br />
          그대로 남아서 채팅을 이어갈 수 있어요.<br />
          채팅방을 나가기 전에 꼭 팀원과 상의해보세요.
        </S.ModalText>
        <S.ButtonBox>
          <S.CancelButton onClick={isclose}>취소</S.CancelButton>
          <S.ConfirmButton onClick={handleExitClick}>나가기</S.ConfirmButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.ModalLayout>
  );
};

export default ExitModal;
