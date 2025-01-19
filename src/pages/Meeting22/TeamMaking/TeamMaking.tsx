import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import Teams from 'components/Meeting22/TeamMaking/Teams/Teams';
import Header from 'components/Meeting22/TeamMaking/Header/Header';
import TeamName from 'components/Meeting22/TeamMaking/TeamName/TeamName';
import MakingButton from 'components/Meeting22/TeamMaking/Buttons/MakingButton/MakingButton';
import { MyProfileData, Profiles } from 'components/Meeting22/TeamMaking/Profile/ProfileData';

const TeamMaking: React.FC = () => {
  const [situation, setSituation] = useState(1);
  const [teamName, setTeamName] = useState('');
  const [inputColor, setinputColor] = useState('rgba(2, 32, 71, 0.05)');
  const [teamMembers, setTeamMembers] = useState<MyProfileData[]>([]);

  const handleMakingButtonClick = () => {
    if (teamName.trim() === '') {
      setinputColor('red'); // 팀명이 입력되지 않은 경우 빨간색
    }
  };

  useEffect(() => {
    const myProfile = Profiles.find(profile => profile.isMe);
    if (myProfile?.joinType === '3to3') {
      if (teamMembers.length === 0 && !teamName) {
        setSituation(1);
      } else if (teamMembers.length === 2 && !teamName) {
        setSituation(2);
      } else if (teamMembers.length === 0 && teamName) {
        setSituation(3);
      } else if (teamMembers.length === 1) {
        setSituation(4);
      } else {
        setSituation(5);
      }
    }
    else {
      if (teamMembers.length === 0 && !teamName) {
        setSituation(1);
      } else if (teamMembers.length === 1 && !teamName) {
        setSituation(2);
      } else if (teamMembers.length === 0 && teamName) {
        setSituation(3);
      } else {
        setSituation(5);
      } 
    }
  }, [teamMembers, teamName]);

  return (
    <S.TeamMakingLayout>
      <Header />
      <TeamName
        teamName={teamName}
        setTeamName={setTeamName}
        setinputColor={setinputColor}
        inputColor={inputColor}
       />
      <Teams 
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        teamName={teamName}
       />
      <MakingButton 
        situation={situation} 
        onClick={handleMakingButtonClick}/>
      <NavigationBar />
    </S.TeamMakingLayout>
  );
};

export default TeamMaking;