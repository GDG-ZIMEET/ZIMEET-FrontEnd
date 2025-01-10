import React from 'react';
import { Meeting22Container, Meeting22Title } from './Styles';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeam from '../../components/Meeting22/MakeTeam/MakeTeam'; 

const Meeting22 = () => {
  return (
    <Meeting22Container>
      <Meeting22Title>팀 갤러리 </Meeting22Title>
      <TypeButton/>
      <MakeTeam/>
      
    <NavigationBar/>
    </Meeting22Container>
  );
};

export default Meeting22;
