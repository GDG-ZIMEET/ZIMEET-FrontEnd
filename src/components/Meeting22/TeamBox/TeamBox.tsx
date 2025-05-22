import React from 'react';
import Team from '../Team/Team';
import * as S from './Styles';
import { TeamType } from '../../../recoilStores/type/Meeting/teamGallery';

interface TeamBoxProps {
  teamData?: TeamType[];
  teamType: string;
}

const TeamBox: React.FC<TeamBoxProps> = ({ teamData, teamType }) => {
  return (
    <S.TeamBoxLayOut>
      {teamData?.map((team) => (
        <Team key={team.teamId} team={team} teamType={teamType} />
      ))}
    </S.TeamBoxLayOut>
  );
};

export default TeamBox;
