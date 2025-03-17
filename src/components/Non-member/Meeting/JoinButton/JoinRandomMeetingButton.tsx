import React from 'react';
import * as S from './Styles';

const JoinRandomMeetingButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <S.ButtonLayout>
      <S.Button  onClick={onClick}>랜덤미팅 참여하기 </S.Button>
    </S.ButtonLayout>
  );
};

export default JoinRandomMeetingButton;
