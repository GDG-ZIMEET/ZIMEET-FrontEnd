import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { teams } from './TeamData';

const Teams: React.FC = () => {

  return (
    <S.TeamComponent>
      {teams.length === 0 ? (
        <S.NoTeamsMessageContainer>
          <S.ZimeetLogo />
          <S.NoTeamsMessage>매력적인 팀을 만들어서 하이를 보내거나, <br /> 받은 하이를 수락하면 채팅방이 열려요!</S.NoTeamsMessage>
        </S.NoTeamsMessageContainer>
      ) : (
        teams.map(team => (
          <S.Team key={team.id} >
            <S.TeamHeader>
              <S.TeamName>{team.name} 팀</S.TeamName>
              <S.WriteTime>{team.writeTime}</S.WriteTime>
            </S.TeamHeader>
            <S.JoinMembersAndIntroduction>
              <S.JoinMembers>
                <S.JoinMemberBox>
                  <S.PinkCircle />
                  <S.JoinMember>{team.join1}</S.JoinMember>
                </S.JoinMemberBox>
                <S.JoinMemberBox>
                  <S.PinkCircle />
                  <S.JoinMember>{team.join2}</S.JoinMember>
                </S.JoinMemberBox>
                {team.joinType === '3to3' && (
                  <S.JoinMemberBox>
                    <S.PinkCircle />
                    <S.JoinMember>{team.join3}</S.JoinMember>
                  </S.JoinMemberBox>
                )}
              </S.JoinMembers>
              <S.Introduction>
                <S.Major>
                  {team.join1Major}/{team.join2Major}
                  {team.joinType === '3to3' && `/${team.join3Major}`} | {team.aveAge}세
                </S.Major>
                <S.MusicStylesContainer>
              <S.MusicEmoji>🎵</S.MusicEmoji>
              <S.MusicStyles>{team.musicStyles.join(', ')}</S.MusicStyles>
            </S.MusicStylesContainer>
              </S.Introduction>
            </S.JoinMembersAndIntroduction>
          </S.Team>
        ))
      )}
    </S.TeamComponent>
  );
};

export default Teams;
