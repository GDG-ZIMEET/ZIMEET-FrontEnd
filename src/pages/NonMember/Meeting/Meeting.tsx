import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import MakeTeamBox from '../../../components/Non-member/Meeting/MakeTeamBox/MakeTeamBox';
import Help from '../../../components/Non-member/Meeting/Help/Help';
import JoinRandomMeetingButton from '../../../components/Non-member/Meeting/JoinButton/JoinRandomMeetingButton';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import { track } from '@amplitude/analytics-browser';

const NonLogInMeeting: React.FC = () => {
  const navigate = useNavigate();

  useEffect( () => {
      track('[접속]미팅_랜덤(비회원)');
  });

  const handleHelpClick = () => {
    navigate('/help');
    track('[클릭]미팅_랜덤_도움말(비회원)')
  };

  const handleJoinClick = () => {
    navigate('/login');
    track('[클릭]미팅_랜덤_로그인(비회원)');
  };

  return (
    <>
      <MakeTeamBox />
      <Help showContainer={true} onClick={handleHelpClick} />
      <S.Explanation>친구도 얻고, 연인도 얻고!</S.Explanation>
      <JoinRandomMeetingButton  onClick={handleJoinClick} />
      <NavigationBar />
    </>
  );
};

export default NonLogInMeeting;