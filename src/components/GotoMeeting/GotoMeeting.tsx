import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import * as amplitude from '@amplitude/analytics-browser';

const GotoMeeting: React.FC = () => {
  const navigate = useNavigate();

  const handleGotoMeetingClick = () => {
    navigate('/meeting22');
    amplitude.track('[클릭]부스_플로팅버튼');
    
  };

  return (
    <S.GotoMeetingLayout onClick={handleGotoMeetingClick}>
      <S.ZimeetLogo />
    </S.GotoMeetingLayout>
  );
};

export default GotoMeeting;