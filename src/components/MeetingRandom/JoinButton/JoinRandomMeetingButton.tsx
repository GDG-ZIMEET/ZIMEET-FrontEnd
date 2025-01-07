import React from 'react';
import * as S from './Styles';

const JoinRandomMeetingButton: React.FC<{ isRoading: boolean; onClick?: () => void }> = ({ isRoading, onClick }) => {
  return (
    <S.Button isRoading={isRoading} onClick={onClick}>
      {isRoading ? '매칭 취소하기' : '⚡️ 티켓 1개로 랜덤미팅 참여하기'}
    </S.Button>
  );
};

export default JoinRandomMeetingButton;
