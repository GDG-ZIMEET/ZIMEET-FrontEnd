import React from 'react';
import * as S from './Styles';
import AgeBox from './AgeBox/AgeBox';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import { User } from '../../../recoil/type/Meeting/TeamDetail';
import { getImageByEmoji } from 'utils/IconMapper';
import { MyProfileType } from '../../../recoil/type/MyPage/MyProfileType';
import { TeamMemberWithProfileType } from '../../../recoil/type/TeamMaking/TeamMemberWithProfileType';
import {
  mappingMusic,
  mappingStyle,
  mappingAge,
  mappingFace,
} from 'data/SignUpData';

interface UserDetailProps {
  profileData: User;
  gender: string;
  isTeamMaking?: boolean;
}

interface MyProfileProps {
  profileData: MyProfileType;
  gender: string;
  isTeamMaking?: boolean;
}

interface MemberProfileProps {
  profileData: TeamMemberWithProfileType;
  gender: string;
  isTeamMaking?: boolean;
}

const MyProfile: React.FC<
  UserDetailProps | MyProfileProps | MemberProfileProps
> = ({ profileData, gender, isTeamMaking = false }) => {
  return (
    <S.MyprofileLayout $isTeamMaking={isTeamMaking}>
      <S.MyProfileContainer $isTeamMaking={isTeamMaking}>
        <S.MyProfileBox1>
          <S.ProfileIMG>
            <S.Avatar>
              <img
                src={getImageByEmoji(profileData.emoji)}
                alt={profileData.emoji}
              />
            </S.Avatar>
          </S.ProfileIMG>
          <AgeBox
            nickname={profileData.nickname}
            age={profileData.age}
            Major={profileData.major}
            classNum={profileData.studentNumber.slice(0, 2)}
            musicStyle={mappingMusic(profileData.music)}
          />
        </S.MyProfileBox1>

        <S.MyProfileBox2>
          <ProfileDetail
            label="MBTI"
            value={profileData.mbti}
            gender={gender}
          />
          <ProfileDetail
            label="스타일"
            value={mappingStyle(profileData.style)}
            gender={gender}
          />
          <ProfileDetail
            label="이상형"
            value={mappingFace(profileData.idealType)}
            gender={gender}
          />
          <ProfileDetail
            label="선호나이"
            value={ mappingAge(profileData.idealAge)}
            gender={gender}
          />
        </S.MyProfileBox2>
      </S.MyProfileContainer>
    </S.MyprofileLayout>
  );
};

export default MyProfile;
