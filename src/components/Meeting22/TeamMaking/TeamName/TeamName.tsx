import React, { useEffect } from 'react';
import * as S from './Styles';

interface TeamNameProps {
  teamName: string;
  setTeamName: React.Dispatch<React.SetStateAction<string>>;
  setinputColor: React.Dispatch<React.SetStateAction<string>>;
  inputColor: string;
}

const TeamName: React.FC<TeamNameProps> = ({ teamName, setTeamName, setinputColor, inputColor }) => {
  
  useEffect(() => {
    if (teamName.trim() === '') {
      // 초기 상태
      setinputColor('rgba(2, 32, 71, 0.05)');
    } else {
      setinputColor(teamName.length <= 7 ? 'green' : 'red');
    }
  }, [teamName, setinputColor]);

  return (
    <S.TeamNameLayout>
      <S.Title>팀명</S.Title>
      <S.Description>이성팀에게 보일 이름이에요</S.Description>
      <S.Input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="(최대 7글자) ex. 같이 한강가요!"
        inputColor={inputColor}
      />
    </S.TeamNameLayout>
  );
};

export default TeamName;
