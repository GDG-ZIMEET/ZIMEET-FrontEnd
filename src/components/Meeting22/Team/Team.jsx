import React from 'react';
import * as S from './Styles';

const Team = ({ teamName, members, teamSize, isVerified }) => {
  const membersToDisplay = members.slice(0, teamSize); 
  const averageAge = (membersToDisplay.reduce((sum, member) => sum + member.age, 0) / membersToDisplay.length).toFixed(1); 
  const majors = membersToDisplay.map(member => member.major);
  const musicGenres = membersToDisplay.map(member => member.musicGenre);

  let majorDisplay; 
  let musicGenreDisplay;
  const uniqueMusicGenres = [...new Set(musicGenres)];
  const uniqueMajors = [...new Set(majors)];
  
  if (uniqueMajors.length === 3) {
    majorDisplay = majors.join(" / ");
  } else if (uniqueMajors.length === 2) {
    majorDisplay = uniqueMajors.join(" / ");
  } else if (uniqueMajors.length === 1) {
    majorDisplay = uniqueMajors[0];
  }
  console.log('uniqueMajors:', uniqueMajors);


  if (uniqueMusicGenres.length === 3) {
    musicGenreDisplay = `${musicGenres[0]} , ${musicGenres[1]}외`;
  } else if (uniqueMusicGenres.length === 2) {
    musicGenreDisplay = uniqueMusicGenres.join(" , ");
  } else if (uniqueMusicGenres.length === 1) {
    musicGenreDisplay = uniqueMusicGenres[0];
  }
  console.log('uniqueMusicGenres:', uniqueMusicGenres);

  return (
    <S.TeamLayOut teamSize={teamSize}>
      <S.EmojiContainer>
        {membersToDisplay.map((member, index) => (
          <S.MemberItem1 key={index}>
            {member.emoji}
          </S.MemberItem1>
        ))}
      </S.EmojiContainer>
      <S.NameContainer>
        <S.TeamNameBox>
          {isVerified && <S.CertificationIcon/>}{teamName}
        </S.TeamNameBox>
        <S.MajorBox>
          <S.MajorDisplay>{majorDisplay} | {averageAge}</S.MajorDisplay>
        </S.MajorBox>
      </S.NameContainer>
      <S.MemberInfo>
      {teamSize === 3 ? (
          <S.MusicGenresDiv>{musicGenreDisplay}</S.MusicGenresDiv>
        ) : (
          membersToDisplay.map((member, index) => (
            <S.MemberItem2 key={index}>{member.musicGenre}</S.MemberItem2>
          ))
      )}
      </S.MemberInfo>
    </S.TeamLayOut>
  );
};

export default Team;
