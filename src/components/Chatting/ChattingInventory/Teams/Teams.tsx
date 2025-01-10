import React from 'react';
import * as S from './Styles';

const Teams: React.FC = () => {
  const teams = [
    { id: 1, name: '만나서 놀아요!', writeTime: '오늘 19:28', joinType: '3to3', join1: '😸', join2: '⚾', join3: '🔥', introduction: '언제 만날까요? 장소는 여기가 좋을 것 같은데 괜찮으실까요?' },
    { id: 2, name: '야구보러갈래요', writeTime: '1/10 10:30', joinType: '2to2', join1: '🐶', join2: '⚾',  introduction: '저는 야구 좋아하는데' },
    { id: 3, name: '팀 3', writeTime: '3일 전', joinType: '3to3', join1: '🐰', join2: '🦊', join3: '🐻', introduction: '이번 주말에 만나요!' },
    { id: 4, name: '팀 4', writeTime: '5일 전', joinType: '2to2', join1: '🐼', join2: '🐨', introduction: '다음 달에 만나요!' },
    { id: 5, name: '팀 5', writeTime: '1주일 전', joinType: '3to3', join1: '🦁', join2: '🐮', join3: '🐷', introduction: '언제 만날까요?' },
    { id: 6, name: '팀 6', writeTime: '2주일 전', joinType: '3to3', join1: '🐸', join2: '🐵', join3: '🐔', introduction: '장소는 어디가 좋을까요?' },
  ];

  return (
    <S.TeamComponent>
      {teams.map(team => (
        <S.Team key={team.id}>
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
      ))}
    </S.TeamComponent>
  );
};

export default Teams;
