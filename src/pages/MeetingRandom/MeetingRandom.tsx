import React from 'react';
import { MeetingRandomContainer, MeetingRandomTitle, AddPeople } from './Styles';
import TypeButton from '../../components/MeetingRandom/TypeButton/TypeButton';
import MakeTeamBox from '../../components/MeetingRandom/MakeTeamBox/MakeTeamBox';
import Help from '../../components/MeetingRandom/Help/Help';
import JoinRandomMeetingButton from '../../components/MeetingRandom/JoinButton/JoinRandomMeetingButton';

const MeetingRandom: React.FC = () => {
  return (
    <MeetingRandomContainer>
      <MeetingRandomTitle>팀 갤러리</MeetingRandomTitle>
      <TypeButton />
      <MakeTeamBox showGender={false} isLoading={false} />
      <Help showContainer={true} />
      <AddPeople>친구도 얻고, 연인도 얻고!</AddPeople>
      <JoinRandomMeetingButton isRoading={false} />
    </MeetingRandomContainer>
  );
};

export default MeetingRandom;
