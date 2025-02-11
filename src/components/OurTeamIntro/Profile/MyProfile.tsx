import React from 'react'; 
import * as S from './Styles';
import AgeBox from './AgeBox/AgeBox';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import { User } from '../../../recoil/type/Meeting/TeamDetail';
import { getImageByEmoji } from 'utils/IconMapper';

interface UserDetailProps {
  profileData: User; 
  gender: string;
}

const MyProfile: React.FC<UserDetailProps> = ({ profileData, gender }) => {

  return (
    <S.MyprofileLayout>
      <S.MyProfileContainer>
        <S.MyProfileBox1>
          <S.ProfileIMG>
            <S.Avatar>
              <img src={getImageByEmoji(profileData.emoji)} alt={profileData.emoji} />
            </S.Avatar>
          </S.ProfileIMG>
          <AgeBox 
            nickname={profileData.nickname} 
            age={profileData.age} 
            Major={profileData.major} 
            classNum={profileData.studentNumber} 
            musicStyle={profileData.music}/>
        </S.MyProfileBox1>

        <S.MyProfileBox2>
          <ProfileDetail label="MBTI" value={profileData.mbti} gender={gender}/>
          <ProfileDetail label="스타일" value={profileData.style} gender={gender}/>
          <ProfileDetail label="이상형" value={profileData.idealType} gender={gender}/>
          <ProfileDetail label="선호나이" value={profileData.idealAge} gender={gender}/>
        </S.MyProfileBox2>
      </S.MyProfileContainer>
    </S.MyprofileLayout>
  );
};

export default MyProfile;
