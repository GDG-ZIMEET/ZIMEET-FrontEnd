import React from 'react';
import * as S from './Styles';
import { teams } from './TeamData';
import PeoplePlusButton from './PeoplePlusButton/PeoplePlusButton';
import MyProfile from './MyProfile/MyProfile';

const Teams: React.FC = () => {

  return (
    <S.TeamLayout>
      <S.TeamContainer>
        <S.Title>내 프로필</S.Title>
        <S.Description>나는 상대에게 이렇게 보여요,프로필은 마이에서 편집할 수 있어요.</S.Description>
        <MyProfile />
        {teams.length === 0 ? (
          <PeoplePlusButton />
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
                <S.Introduction>{team.introduction}</S.Introduction>
              </S.JoinMembersAndIntroduction>
            </S.Team>
          ))
        )}
      </S.TeamContainer>
    </S.TeamLayout>
  );
};

export default Teams;
