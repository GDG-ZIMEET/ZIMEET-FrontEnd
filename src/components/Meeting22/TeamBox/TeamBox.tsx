import React from 'react';
import Team from '../Team/Team'; 
import * as S from './Styles'; 
import { TeamType } from '../../../recoil/type/Meeting/teamGallery';

interface TeamBoxProps {
  teamData: TeamType[]; 
  ourTeamData: any | null;
}

const TeamBox: React.FC<TeamBoxProps> = ({ teamData, ourTeamData }) => {
  return (
    <S.TeamBoxLayOut>
      {teamData.map((team) => (
        <Team key={team.teamId} team={team} ourTeamData={ourTeamData}/>
      ))}
    </S.TeamBoxLayOut>
  );
};

export default TeamBox;
