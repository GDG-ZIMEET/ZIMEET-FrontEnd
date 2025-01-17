import React, { useState } from 'react';
import * as S from './Styles';

const TeamName: React.FC = () => {
  const [teamName, setTeamName] = useState('');

  return (
    <S.TeamNameLayout>
      <S.Title>팀명</S.Title>
      <S.Description>이성팀에게 보일 이름이에요</S.Description>
      <S.Input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="(최대 7글자) ex. 같이 한강가요!"
      />
    </S.TeamNameLayout>
  );
};

export default TeamName;
