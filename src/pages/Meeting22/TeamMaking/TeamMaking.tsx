import React, { useState } from 'react';
import * as S from './Styles';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import Teams from 'components/Meeting22/TeamMaking/Teams/Teams';
import Header from 'components/Meeting22/TeamMaking/Header/Header';
import TeamName from 'components/Meeting22/TeamMaking/TeamName/TeamName';
import MakingButton from 'components/Meeting22/TeamMaking/MakingButton/MakingButton';

const TeamMaking: React.FC = () => {

  return (
    <S.TeamMakingLayout>
      <Header />
      <TeamName />
      <Teams />
      <MakingButton />
      <NavigationBar />
    </S.TeamMakingLayout>
  );
};

export default TeamMaking;