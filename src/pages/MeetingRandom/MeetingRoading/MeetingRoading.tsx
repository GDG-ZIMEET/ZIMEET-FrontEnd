import React from 'react';
import { MeetingRodingContainer, MeetingRandomTitle, WaitPeople } from './Styles';
import TypeButton from '../../../components/MeetingRandom/TypeButton/TypeButton';
import MakeTeamBox from '../../../components/MeetingRandom/MakeTeamBox/MakeTeamBox';
import Help from '../../../components/MeetingRandom/Help/Help';
import JoinRandomMeetingButton from '../../../components/MeetingRandom/JoinButton/JoinRandomMeetingButton';

const MeetingRoading: React.FC = () => {
  return (
    <MeetingRodingContainer>
      <MeetingRandomTitle>팀 갤러리</MeetingRandomTitle>
      <TypeButton />
      <MakeTeamBox showGender={true} isLoading={true} />
      <Help showContainer={false} />
      <WaitPeople>다른 참여자를 기다리는 중 (예상 시간 : 5분)</WaitPeople>
      <JoinRandomMeetingButton isRoading={true} />
    </MeetingRodingContainer>
  );
};

export default MeetingRoading;
