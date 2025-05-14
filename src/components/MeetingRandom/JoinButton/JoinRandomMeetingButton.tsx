import React from 'react';
import * as S from './Styles';

interface JoinRandomMeetingButtonProps {
  isRandomLoading: boolean;
  onClick?: () => void;
}
const JoinRandomMeetingButton: React.FC<JoinRandomMeetingButtonProps> = ({ isRandomLoading, onClick }) => {
  return (
    <S.ButtonLayout>
      <S.WaitPeople>{isRandomLoading && '다른 참여자를 기다리는 중 (예상 시간 : 1분)'}</S.WaitPeople>
      <S.Button $isRandomLoading={isRandomLoading} onClick={onClick}>
        {!isRandomLoading && <S.RandomJoinIcon />}
        <S.RandomJoinText>{isRandomLoading ? '매칭 취소하기' : '티켓 1개로 랜덤미팅 참여하기'}</S.RandomJoinText>
      </S.Button>
    </S.ButtonLayout>
  );
};

export default JoinRandomMeetingButton;
