import React, { useState, useEffect } from 'react'; 
import * as S from './Styles';
import AgeBox from './AgeBox/AgeBox';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import PremiumModal from 'components/TeamIntro/Modal/PremiumModal/PremiumModal';
import Detail from 'components/TeamIntro/Modal/Detail/Detail';
import { User } from '../../../recoil/type/Meeting/TeamDetail';
import { getImageByEmoji } from 'utils/IconMapper';

interface UserDetailProps {
  profileData: User; 
  isPremium: boolean;
  gender: string;
}

const MyProfile: React.FC<UserDetailProps> = ({ profileData, isPremium, gender }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isPremium) {
      setShowModal(true);
    }
  }, [isPremium]);



  return (
    <S.MyprofileLayout>
      <S.MyProfileContainer>
        <S.MyProfileBox1>
          <S.ProfileIMG>
            <S.Avatar><img src={getImageByEmoji(profileData.emoji)} alt={profileData.emoji} /></S.Avatar>
          </S.ProfileIMG>
          <AgeBox 
            nickname={profileData.nickname} 
            age={profileData.age} 
            Major={profileData.major} 
            classNum={profileData.studentNumber} 
            musicStyle={profileData.music}/>
        </S.MyProfileBox1>

        <S.MyProfileBox2>
          {isPremium ? (
            <>
              <ProfileDetail label="MBTI" value={profileData.mbti} gender={gender}/>
              <ProfileDetail label="스타일" value={profileData.style} gender={gender}/>
              <ProfileDetail label="이상형" value={profileData.idealType} gender={gender}/>
              <ProfileDetail label="선호나이" value={profileData.idealAge} gender={gender}/>
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
