import React from 'react';
import Team from '../Team/Team';
import TeamData from '../Team/TeamData';
import { TeamBoxLayOut } from './Styles';

const TeamBox = () => {
  return (
    <TeamBoxLayOut>
      {TeamData.map((team) => (
        <Team 
          key={team.id} 
          teamName={team.teamName} 
          members={team.members} 
        />
      ))}
    </TeamBoxLayOut>
  );
};

export default TeamBox;
