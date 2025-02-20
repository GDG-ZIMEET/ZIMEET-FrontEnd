import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import TypeButton from '../../../components/Non-member/Meeting/TypeButton/TypeButton';
import MakeTeamBox from '../../../components/Non-member/Meeting/MakeTeamBox/MakeTeamBox';
import Help from '../../../components/Non-member/Meeting/Help/Help';
import JoinRandomMeetingButton from '../../../components/Non-member/Meeting/JoinButton/JoinRandomMeetingButton';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';

const Meeting: React.FC = () => {const navigate = useNavigate();

  const handleHelpClick = () => {
    navigate('/help');
  };

  const handleJoinClick = () => {
    navigate('/login');
  };

  return (
    <S.MeetingRandomContainer>
      <S.MeetingRandomTitle>팀 갤러리</S.MeetingRandomTitle>
      <TypeButton />
      <MakeTeamBox showGender={false} isLoading={false} showExplain={false} />
      <Help showContainer={true} onClick={handleHelpClick} />
      <S.Explanation>친구도 얻고, 연인도 얻고!</S.Explanation>
      <JoinRandomMeetingButton  onClick={handleJoinClick} />
      <NavigationBar />
    </S.MeetingRandomContainer>
  );
};

export default Meeting;
