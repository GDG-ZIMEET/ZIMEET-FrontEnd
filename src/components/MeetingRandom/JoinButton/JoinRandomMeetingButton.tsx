import React from 'react';
import * as S from './Styles';

const JoinRandomMeetingButton: React.FC<{ isRoading: boolean }> = ({ isRoading }) => {
  return (
    <S.Button isRoading={isRoading}>
      {isRoading ? '매칭 취소하기' : '랜덤미팅 참여하기'}
    </S.Button>
  );
};

export default JoinRandomMeetingButton;
