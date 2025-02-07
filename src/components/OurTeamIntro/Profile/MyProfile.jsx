import React from 'react'; 
import * as S from './Styles';
import AgeBox from './AgeBox/AgeBox';
import ProfileDetail from './ProfileDetail/ProfileDetail';

const MyProfile = ({ profileData }) => {
  const { avatar, nickname, mbti, style, idealType, preferredAge, Major, age, classNum, musicStyle } = profileData;

  return (
    <S.MyprofileLayout>
      <S.MyProfileContainer>
        <S.MyProfileBox1>
          <S.ProfileIMG>
            <S.Avatar>{avatar}</S.Avatar>
          </S.ProfileIMG>
          <AgeBox nickname={nickname} age={age} Major={Major} classNum={classNum} musicStyle={musicStyle} joinType={'3to3'} />
        </S.MyProfileBox1>

        <S.MyProfileBox2>
          <ProfileDetail label="MBTI" value={mbti} />
          <ProfileDetail label="스타일" value={style} />
          <ProfileDetail label="이상형" value={idealType} />
          <ProfileDetail label="선호나이" value={preferredAge} />
        </S.MyProfileBox2>
      </S.MyProfileContainer>
    </S.MyprofileLayout>
  );
};

export default MyProfile;
