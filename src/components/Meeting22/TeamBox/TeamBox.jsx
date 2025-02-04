import React from 'react';
import Team from '../Team/Team';
import TeamData from '../Team/TeamData';
import { TeamBoxLayOut,Wrapper } from './Styles';

const TeamBox = () => {
  return (

    <TeamBoxLayOut>
      {TeamData.map((team) => (
        <Team 
          key={team.id} 
          teamName={team.teamName} 
          members={team.members} 
          isVerified={team.isVerified}
        />
      ))}
    </TeamBoxLayOut>

  );
};

export default TeamBox;