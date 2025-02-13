import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { GetCheckDuplicate } from '../../../../api/Meeting/GetCheckDuplicate';

interface TeamNameProps {
  teamName: string;
  setTeamName: React.Dispatch<React.SetStateAction<string>>;
  setinputColor: React.Dispatch<React.SetStateAction<string>>;
  $inputcolor: string;
}

const TeamName: React.FC<TeamNameProps> = ({ teamName, setTeamName, setinputColor, $inputcolor }) => {
  const [isDuplicate, setIsDuplicate] = useState<number | null>(null);

  useEffect(() => {
    if (!teamName.trim()) {
      setinputColor('rgba(2, 32, 71, 0.05)');
    }
  }, []); 

  
  const handleCheck = async () => {
    if (!teamName.trim()) {
      setinputColor('rgba(2, 32, 71, 0.05)');
      setIsDuplicate(null);
      return;
    }

    if (teamName.length < 1 || teamName.length > 7) {
      setinputColor('red');
      setIsDuplicate(null);
      return;
    }

    const encodedTeamName = encodeURIComponent(teamName);
    const OkTeamName = await GetCheckDuplicate(encodedTeamName);
    
    setIsDuplicate(OkTeamName?.data.check ?? 1);
    setinputColor(OkTeamName?.data.check === 0 ? 'red' : 'black');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCheck(); 
    }
  };

  return (
    <S.TeamNameLayout>
      <S.Title>팀명</S.Title>
      <S.Description>이성팀에게 보일 이름이에요</S.Description>
      <S.Input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="(최대 7글자) ex. 같이 한강가요!"
        $inputcolor={$inputcolor}
        onKeyDown={handleKeyDown}
        onBlur={handleCheck}
      />
      {teamName && (teamName.length < 1 || teamName.length > 7) ? (
        <S.ErrorMessage>1~8글자 사이의 팀명을 입력해주세요.</S.ErrorMessage>
      ) : null}
      {teamName && isDuplicate === 0 ? (
        <S.ErrorMessage>이미 사용중인 팀명입니다.</S.ErrorMessage>
      ) : null}
    </S.TeamNameLayout>
  );
};

export default TeamName;
