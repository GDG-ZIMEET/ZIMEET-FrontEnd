import React, { useState, useEffect  } from 'react';
import { useRecoilState } from 'recoil';
import { isPremiumState } from '../../recoil/state/authStore'; 
import * as S from './Styles'; 
import Header from 'components/TeamIntro/Header/Header';
import MyProfile from 'components/TeamIntro/Profile/MyProfile';
import Profiles from 'components/TeamIntro/Profile/ProfileData';
import NavigationBar from 'components/NavigationBar/NavigationBar';
const TeamIntro = () => {
  const [isPremium, setIsPremium] = useRecoilState(isPremiumState); 

  const profileData = Profiles.find(profile => profile.isMe === true);

  useEffect(() => {
    const checkPremiumStatus = async () => {
      setIsPremium(false);
    };
    checkPremiumStatus();
  }, [setIsPremium]);

  return (
    <S.Container>
      <Header />
      {profileData && (
        <MyProfile 
          profileData={profileData} 
          isMe={profileData.isMe}  
          isPremium={isPremium} />
      )}
    <NavigationBar/>
    </S.Container>
  );
};

export default TeamIntro;
