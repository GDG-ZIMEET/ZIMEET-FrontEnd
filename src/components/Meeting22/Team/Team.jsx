import React from 'react';
import * as S from './Styles'; 

const Team = ({ teamName, members }) => {
  const averageAge = (members.reduce((sum, member) => sum + member.age, 0) / members.length).toFixed(1);

  const uniqueMajors = [...new Set(members.map((member) => member.major))];
  const majorDisplay = uniqueMajors.length === 1 ? uniqueMajors[0] : uniqueMajors.join("/ ");

  return (
    <S.TeamLayOut>
      <S.rowBox1>
        {members.map((member, index) => (
        <S.MemberItem1 key={index}>
           {member.emoji}
        </S.MemberItem1>
    ))}
      </S.rowBox1>
      <S.rowBox3>
        <S.TeamName>{teamName}</S.TeamName>
        <S.rowBox2>
          <S.MajorDisplay>{majorDisplay} | {averageAge}</S.MajorDisplay>
        </S.rowBox2>
      </S.rowBox3>
        <S.MemberInfo>
          {members.map((member, index) => (
            <S.MemberItem2 key={index}>
              {member.musicGenre} 
            </S.MemberItem2>
            ))}
        </S.MemberInfo>

    </S.TeamLayOut>
  );
};

export default Team;
