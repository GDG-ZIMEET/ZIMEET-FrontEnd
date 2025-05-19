import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import ViewMore from '../ViewMore/ViewMore';
import { useNavigate } from 'react-router-dom';
import { OurTeamType } from 'recoilStores/type/Meeting/ourTeamType';
import { getImageByEmoji } from 'utils/IconMapper';
import { MyProfileType } from 'recoilStores/type/Meeting/MyProfile';
import { track } from '@amplitude/analytics-browser';

interface MakeTeamProps {
  ourTeamData?: OurTeamType | null; 
  myProfileData?: MyProfileType | null;
  teamType : string;
}

const MakeTeam: React.FC<MakeTeamProps> = ({ ourTeamData, teamType , myProfileData }) => {
  const navigate = useNavigate();

  const handleCreateTeam = () => {
    navigate('/teamMaking', { state: { teamType } });
    if (teamType === 'TWO_TO_TWO') {
      track('[클릭]미팅_팀만들기버튼_2대2');
    } else if (teamType === 'THREE_TO_THREE') {
      track('[클릭]미팅_팀만들기버튼_3대3');
    } else if (teamType === 'ONE_TO_ONE') {
      track('[클릭]미팅_팀만들기버튼_1대1');
    }
  };

  const handleDetailPage= () => {
    if (teamType === 'TWO_TO_TWO') {
      track('[클릭]미팅_내팀보기버튼_2대2');
    } else if (teamType === 'THREE_TO_THREE') {
      track('[클릭]미팅_내팀보기버튼_3대3');
    } else if (teamType === 'ONE_TO_ONE') {
      track('[클릭]미팅_내팀보기버튼_1대1');
    } 
    navigate('/ourteamintro', { state: { teamType } });
  };

  return (
    <S.CreateTeamLayOut>
      {!ourTeamData ? (
        <S.CreateTeamButton onClick={handleCreateTeam}>
          {teamType === 'ONE_TO_ONE' ? '1대1 참여하기' : '팀 만들기'}
        </S.CreateTeamButton>
        ) : (
        <S.CreateTeamBox>
          <S.TeamBox>
            {ourTeamData?.emoji.map((emoji, index) => (
                <S.Emoji key={index}><img src={getImageByEmoji(emoji)} alt={emoji} /></S.Emoji>
              ))}
            {myProfileData?
                <S.Emoji><img src={getImageByEmoji(myProfileData.emoji)} alt={myProfileData.emoji} /></S.Emoji>
                : null}
            <S.TeamName>
              {ourTeamData && `${ourTeamData.name} (우리팀)`}
              {myProfileData && ` ${myProfileData.nickname} (나)`}
            </S.TeamName>
          </S.TeamBox> 
          <ViewMore onClick={handleDetailPage} teamType={teamType}/>
        </S.CreateTeamBox>    
      )}
    </S.CreateTeamLayOut>
  );
};

export default MakeTeam;
