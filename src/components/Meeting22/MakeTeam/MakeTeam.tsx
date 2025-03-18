import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import ViewMore from '../ViewMore/ViewMore';
import { useNavigate } from 'react-router-dom';
import { OurTeamType } from 'recoil/type/Meeting/ourTeamType';
import { getImageByEmoji } from 'utils/IconMapper';
import { track } from '@amplitude/analytics-browser';

interface MakeTeamProps {
  ourTeamData: OurTeamType | null; 
  teamType : string;
}

const MakeTeam: React.FC<MakeTeamProps> = ({ ourTeamData, teamType }) => {
  const navigate = useNavigate();

  const handleCreateTeam = () => {
    navigate('/teamMaking', { state: { teamType } });
    if (teamType === 'TWO_TO_TWO') {
      track('[클릭]미팅_팀만들기버튼_2대2');
    } else if (teamType === 'THREE_TO_THREE') {
      track('[클릭]미팅_팀만들기버튼_3대3');
    }
  };

  const handleDetailPage= () => {
    if (teamType === 'TWO_TO_TWO') {
      track('[클릭]미팅_내팀보기버튼_2대2');
    } else if (teamType === 'THREE_TO_THREE') {
      track('[클릭]미팅_내팀보기버튼_3대3');
    }
    navigate('/ourteamintro', { state: { teamType } });
  };

  return (
    <S.CreateTeamLayOut>
      {!ourTeamData ? (
        <S.CreateTeamButton onClick={handleCreateTeam}>
          팀 만들기
        </S.CreateTeamButton>
        ) : (
        <S.CreateTeamBox>
          <S.TeamBox>
          {ourTeamData.emoji.map((emoji, index) => (
              <S.Emoji key={index}><img src={getImageByEmoji(emoji)} alt={emoji} /></S.Emoji>
            ))}
            <S.TeamName>
              {ourTeamData.name} (우리팀)
            </S.TeamName>
          </S.TeamBox> 
          <ViewMore onClick={handleDetailPage}/>
        </S.CreateTeamBox>    
      )}
    </S.CreateTeamLayOut>
  );
};

export default MakeTeam;
