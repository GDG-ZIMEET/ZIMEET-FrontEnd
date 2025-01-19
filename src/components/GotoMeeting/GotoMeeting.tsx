import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

const GotoMeeting: React.FC = () => {
  const navigate = useNavigate();

  const handleGotoMeetingClick = () => {
    navigate('/meeting-random');
  };

  return (
    <S.GotoMeetingLayout onClick={handleGotoMeetingClick}>
      <S.ZimeetLogo />
    </S.GotoMeetingLayout>
  );
};

export default GotoMeeting;