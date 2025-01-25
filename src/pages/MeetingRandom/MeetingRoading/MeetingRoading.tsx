import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MeetingRodingContainer, MeetingRandomTitle, WaitPeople } from './Styles';
import TypeButton from '../../../components/Meeting22/TypeButton/TypeButton';
import MakeTeamBox from '../../../components/MeetingRandom/MakeTeamBox/MakeTeamBox';
import Help from '../../../components/MeetingRandom/Help/Help';
import JoinRandomMeetingButton from '../../../components/MeetingRandom/JoinButton/JoinRandomMeetingButton';
import NavigationBar from 'components/NavigationBar/NavigationBar';

const MeetingRoading: React.FC = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/meeting-random');
  };

  return (
    <MeetingRodingContainer>
      <MeetingRandomTitle>팀 갤러리</MeetingRandomTitle>
      <TypeButton />
      <MakeTeamBox showGender={true} isLoading={true} showExplain={false} />
      <Help showContainer={false} onClick={() => {}} />
      <WaitPeople>다른 참여자를 기다리는 중 (예상 시간 : 5분)</WaitPeople>
      <JoinRandomMeetingButton isRoading={true} onClick={handleCancelClick} />
      <NavigationBar />
    </MeetingRodingContainer>
  );
};

export default MeetingRoading;
