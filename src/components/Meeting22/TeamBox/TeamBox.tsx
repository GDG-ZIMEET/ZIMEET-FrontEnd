import React from 'react';
import Team from '../Team/Team'; 
import * as S from './Styles'; 
import { TeamType } from '../../../recoil/type/teamGallery';

interface TeamBoxProps {
  teamData: TeamType[]; 
}

const TeamBox: React.FC<TeamBoxProps> = ({ teamData }) => {
  return (
    <S.TeamBoxLayOut>
      {teamData.map((team) => (
        <Team key={team.teamId} team={team} />
      ))}
    </S.TeamBoxLayOut>
  );
};

export default TeamBox;
