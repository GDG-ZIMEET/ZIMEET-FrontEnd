import React from 'react';
import * as S from './Styles';
import { TeamType } from '../../../recoil/type/teamGallery';
import { getImageByEmoji } from 'utils/IconMapper';

interface TeamProps {
  team: TeamType;
}

const Team: React.FC<TeamProps> = ({ team }) => {
  if (!team) {
    return <div>팀 정보가 없습니다.</div>; 
  }
  
  const isVerified = team.verification === 1;
  const majorDisplay = team.major.join('/');

  return (
    <S.TeamLayOut>
      <S.EmojiContainer>
        {team.emoji.map((emoji, index) => (
          <S.MemberItem1 key={index}>
            <img src={getImageByEmoji(emoji)} alt={emoji} />
          </S.MemberItem1>
        ))}
      </S.EmojiContainer>
      <S.NameContainer>
        <S.TeamNameBox>
          {isVerified && <S.CertificationIcon/>}{team.name}
        </S.TeamNameBox>
        <S.MajorBox>
          <S.MajorDisplay>{majorDisplay} | {team.age}</S.MajorDisplay>
        </S.MajorBox>
      </S.NameContainer>
      <S.MemberInfo>
        {team.music.length > 0 && <S.MemberItem2>{team.music[0]}</S.MemberItem2>}
        {team.music.length > 1 && <S.MemberItem2>{team.music[1]}</S.MemberItem2>} 
      </S.MemberInfo>
    </S.TeamLayOut>
  );
};

export default Team;
