import React from 'react';
import * as S from './Styles';
import { TeamType } from '../../../recoil/type/Meeting/teamGallery';
import { getImageByEmoji } from 'utils/IconMapper';
import { useNavigate } from 'react-router-dom';

interface TeamProps {
  team: TeamType;
}

const Team: React.FC<TeamProps> = ({ team }) => {
  const navigate = useNavigate();

  if (!team) {
    return <div>팀 정보가 없습니다.</div>; 
  }
  
  const isVerified = team.verification === 1;
  const majorDisplay = team.major.join('/');
  
  const handleTeamClick = () => {
    navigate(`/teamintro/${team.teamId}`);
  };

  return (
    <S.TeamLayOut onClick={handleTeamClick}>
      <S.EmojiContainer>
        {team.emoji.map((emoji, index) => (
          <S.MemberItem1 key={index}>
            <img src={getImageByEmoji(emoji)} alt={emoji} />
          </S.MemberItem1>
        ))}
      </S.EmojiContainer>
      <S.NameContainer>
        <S.TeamNameBox>
          {team.name}
        </S.TeamNameBox>
        <S.MajorBox>
        {isVerified && <S.CertificationIcon/>}<S.MajorDisplay>{majorDisplay} | {team.age}세</S.MajorDisplay>
        </S.MajorBox>
      </S.NameContainer>
      <S.MemberInfo>
        {team.music.length === 1 && (
          <S.MemberItem2 width="65%">
            {team.music[0]}
          </S.MemberItem2>
        )}
        {team.music.length === 2 && (
          <>
            <S.MemberItem2 width="35%">
              {team.music[0]}
            </S.MemberItem2>
            <S.MemberItem2 width="35%">
              {team.music[1]}
            </S.MemberItem2>
          </>
        )}
        {team.music.length === 3 && (
          <S.MemberItem2 width="65%">
            {team.music[0]}, {team.music[1]} 외
          </S.MemberItem2>
        )}
      </S.MemberInfo>
    </S.TeamLayOut>
  );
};

export default Team;
