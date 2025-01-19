import React from 'react';
import * as S from './Styles';
import { MyProfileData, Profiles } from '../Profile/ProfileData';
import PeoplePlusButton from '../Buttons/PlusButton/PeoplePlusButton';
import MyProfile from '../Profile/MyProfile';

interface TeamsProps {
  teamMembers: MyProfileData[];
  setTeamMembers: React.Dispatch<React.SetStateAction<MyProfileData[]>>;
  teamName: string;
}

const Teams: React.FC<TeamsProps> = ({ teamMembers, setTeamMembers, teamName }) => {
  const myProfile = Profiles.find(profile => profile.isMe);
  const filteredTeamMembers = teamMembers.filter(member => !member.isMe);

  // 친구 추가 함수
  const handleAddFriend = (friend: MyProfileData) => {
    // 이미 추가된 팀원인지 확인
    if (!teamMembers.some(member => member.nickname === friend.nickname)) {
      setTeamMembers(prevMembers => [...prevMembers, friend]); // 새로운 친구 추가
    }
  };

  //3대3일경우 팀원 추가
  const maxTeamMembers = myProfile?.joinType === '3to3' ? 2 : 1;

  return (
    <S.TeamLayout>
      <S.TeamContainer>
        <S.Title>내 프로필</S.Title>
        <S.Description>나는 상대에게 이렇게 보여요,프로필은 마이에서 편집할 수 있어요.</S.Description>
        {myProfile && <MyProfile profileData={myProfile} isMe />}
        <S.Title>팀원</S.Title>
        {filteredTeamMembers.length > 0 && (
          filteredTeamMembers.map((team, index) => (
            <MyProfile key={index} profileData={team} />
          ))
        )}
        {filteredTeamMembers.length < maxTeamMembers && (
          <PeoplePlusButton onAddFriend={handleAddFriend} joinType={myProfile?.joinType as '2to2' | '3to3' || '2to2'}/>
        )}
      </S.TeamContainer>
    </S.TeamLayout>
  );
};

export default Teams;