import React, { useState, useEffect } from 'react'; 
import * as S from './Styles';
import AgeBox from './AgeBox/AgeBox';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import PremiumModal from 'components/TeamIntro/Modal/PremiumModal/PremiumModal';
import Detail from 'components/TeamIntro/Modal/Detail/Detail';


const MyProfile = ({ profileData, isPremium }) => {
  const { avatar, nickname, mbti, style, idealType, preferredAge, Major, age, classNum, musicStyle } = profileData;

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
            <S.ProfileCircle />
            <S.Avatar>{avatar}</S.Avatar>
          </S.ProfileIMG>
          <AgeBox nickname={nickname} age={age} Major={Major} classNum={classNum} musicStyle={musicStyle} joinType={'3to3'} />
        </S.MyProfileBox1>

        <S.MyProfileBox2>
          {isPremium ? (
            <>
              <ProfileDetail label="MBTI" value={mbti} />
              <ProfileDetail label="스타일" value={style} />
              <ProfileDetail label="이상형" value={idealType} />
              <ProfileDetail label="선호나이" value={preferredAge} />
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
