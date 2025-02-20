import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import PeoplePlusButton from '../Buttons/PlusButton/PeoplePlusButton';
import MyProfile from '../../../Common/Profile/MyProfile';
import { getmyProfile } from 'api/Mypage/GetmyProfile';
import { MyProfileType } from 'recoil/type/MyPage/MyProfileType';
import { TeamMemberWithProfileType } from 'recoil/type/TeamMaking/TeamMemberWithProfileType';
import { SearchTeamMemberType } from 'recoil/type/TeamMaking/SearchTeamMember';
import { getuserProfile } from 'api/TeamMaking/GetUserProfile';
import {
  mappingMusic,
  mappingStyle,
  mappingAge,
  mappingFace,
} from 'data/SignUpData';

interface TeamsProps {
  teamMembersInfo: TeamMemberWithProfileType[];
  setTeamMembersInfo: React.Dispatch<
    React.SetStateAction<TeamMemberWithProfileType[]>
  >;
  teamType: string;
}

const Teams: React.FC<TeamsProps> = ({
  teamMembersInfo,
  setTeamMembersInfo,
  teamType,
}) => {
  const [teamMembers, setTeamMembers] =
    useState<SearchTeamMemberType[]>(teamMembersInfo);
  const [MyProfileData, setMyProfileData] = useState<MyProfileType | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 내 정보
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const response = await getmyProfile();
        if (response) {
          setMyProfileData({
            ...response.data,
            studentNumber: response.data.studentNumber?.slice(0, 2) || '',
            music: mappingMusic(response.data.music ?? '') || '',
            style: mappingStyle(response.data.style) || '',
            idealAge: mappingAge(response.data.idealAge) || '',
            idealType: mappingFace(response.data.idealType) || '',
          });
        } else {
          setMyProfileData(null);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setMyProfileData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyProfile();
  }, []);

  // 팀원 정보
  useEffect(() => {
    const fetchTeamMemberProfiles = async () => {
      try {
        if (teamMembers.length > 0) {
          const membersWithProfiles: TeamMemberWithProfileType[] =
            await Promise.all(
              teamMembers.map(async (member) => {
                const response = await getuserProfile(member.nickname);
                return {
                  ...member,
                  studentNumber: response?.data.studentNumber || '',
                  gender: response?.data.gender || '',
                  emoji: response?.data.emoji || '',
                  age: response?.data.age || 0,
                  mbti: response?.data.mbti || '',
                  style: mappingStyle(response?.data.style ?? ''),
                  idealType: mappingFace(response?.data.idealType ?? ''),
                  idealAge: mappingAge(response?.data.idealAge ?? ''),
                  music: mappingMusic(response?.data.music ?? ''),
                };
              }),
            );

          setTeamMembersInfo(membersWithProfiles);
        }
      } catch (error) {
        console.error('Error fetching team member profiles:', error);
      }
    };

    fetchTeamMemberProfiles();
  }, [teamMembers]);

  //3대3일경우 팀원 추가
  const maxTeamMembers = teamType === 'THREE_TO_THREE' ? 2 : 1;

  return (
    <S.TeamLayout>
      <S.TeamContainer>
        <S.Title>내 프로필</S.Title>
        <S.Description>
          나는 상대에게 이렇게 보여요,프로필은 마이에서 편집할 수 있어요.
        </S.Description>
        {MyProfileData ? (
          <MyProfile
            profileData={MyProfileData}
            gender={MyProfileData.gender}
            isTeamMaking={true}
          />
        ) : null}
        <S.Title>팀원</S.Title>
        {teamMembersInfo.map((member: TeamMemberWithProfileType) => (
          <MyProfile
            key={member.userId}
            profileData={member}
            gender={member.gender}
            isTeamMaking={true}
          />
        ))}
        {teamMembers.length < maxTeamMembers && (
          <PeoplePlusButton
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
            teamType={teamType}
          />
        )}
      </S.TeamContainer>
    </S.TeamLayout>
  );
};

export default Teams;
