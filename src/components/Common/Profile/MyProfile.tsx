import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import AgeBox from './AgeBox/AgeBox';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import { User } from '../../../recoilStores/type/Meeting/TeamDetail';
import { getImageByEmoji } from 'utils/IconMapper';
import { MyProfileType } from '../../../recoilStores/type/MyPage/MyProfileType';
import { TeamMemberWithProfileType } from '../../../recoilStores/type/TeamMaking/TeamMemberWithProfileType';
import PremiumModal from 'components/TeamIntro/Modal/PremiumModal/PremiumModal';
import Detail from 'components/TeamIntro/Modal/Detail/Detail';
import {
  mappingMusic,
  mappingStyle,
  mappingAge,
  mappingFace,
} from 'data/SignUpData';

interface UserDetailProps {
  profileData: User;
  gender: string;
  isPremium?: boolean;
  isTeamMaking?: boolean;
  studentNum?: string;
}

interface MyProfileProps {
  profileData: MyProfileType;
  gender: string;
  isPremium?: boolean;
  studentNum?: string;
  isTeamMaking?: boolean;
}

interface MemberProfileProps {
  profileData: TeamMemberWithProfileType;
  gender: string;
  isPremium?: boolean;
  isTeamMaking?: boolean;
  studentNum?: string;
}

const MyProfile: React.FC<
  UserDetailProps | MyProfileProps | MemberProfileProps
> = ({ profileData, gender, isPremium = false, isTeamMaking = false, studentNum }) => {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
      if (!isPremium) {
        setShowModal(true);
      }
    }, [isPremium]);
    
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
            classNum={studentNum ? studentNum : profileData.studentNumber}
            musicStyle={mappingMusic(profileData.music)}
          />
        </S.MyProfileBox1>

        <S.MyProfileBox2>
        {isPremium ? (
            <>
              <ProfileDetail label="MBTI" value={profileData.mbti} gender={gender}/>
              <ProfileDetail label="스타일" value={mappingStyle(profileData.style)} gender={gender}/>
              <ProfileDetail label="이상형" value={mappingFace(profileData.idealType)} gender={gender}/>
              <ProfileDetail label="선호나이" value={mappingAge(profileData.idealAge)} gender={gender}/>
            </>
          ) : (
            <>
              {showModal && <PremiumModal onClose={() => setShowModal(false)} />}
              <Detail/>
            </>
          )}
        </S.MyProfileBox2>
      </S.MyProfileContainer>
    </S.MyprofileLayout>
  );
};

export default MyProfile;
