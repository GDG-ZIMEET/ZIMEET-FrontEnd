import React from 'react';
import Team from '../../Meeting22/Team/Team'; 
import TeamData from '../../Meeting22/Team/TeamData'; 
import * as S from './Styles'; 
import { useRecoilValue } from 'recoil';
import { teamSizeState } from '../../../recoil/state/teamSizeState'

const TeamBox = () => {
  const teamSize = useRecoilValue(teamSizeState);
  const filteredTeams = TeamData.filter((team) => team.members.length === teamSize);

  return (
    <S.TeamBoxLayOut>
      {filteredTeams.map((team) => (
        <Team 
          key={team.id} 
          teamName={team.teamName} 
          members={team.members} 
          teamSize={teamSize}
        />
      ))}
    </S.TeamBoxLayOut>
  );
};

export default TeamBox;
