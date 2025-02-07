import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import TeamData from '../Team/TeamData';
import ViewMore from '../ViewMore/ViewMore';

const MakeTeam = () => {
  const [teamCreated, setTeamCreated] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const team = TeamData.find(team => team.id === 1);

    if (team) {
      setTeamName(team.teamName);
      setEmojis(team.members.map(member => member.emoji));
    }
  }, []);

  const handleCreateTeam = () => {
    setTeamCreated(true);
  };

  return (
    <S.CreateTeamLayOut>
      {!teamCreated ? (
        <S.CreateTeamButton onClick={handleCreateTeam}>팀 만들기</S.CreateTeamButton>
      ) : (
        <S.CreateTeamBox>
          <S.TeamBox>
            {emojis.length > 0 && emojis.map((emoji, index) => (
              <S.Emoji key={index}>{emoji}</S.Emoji>
            ))}
            <S.TeamName>{teamName}(우리팀)</S.TeamName>
          </S.TeamBox> 
          <ViewMore />
        </S.CreateTeamBox>    
      )}
    </S.CreateTeamLayOut>
  );
};

export default MakeTeam;
