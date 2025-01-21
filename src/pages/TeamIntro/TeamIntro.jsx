import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isPremiumState } from '../../recoil/state/authStore'; 
import * as S from './Styles'; 
import Header from 'components/TeamIntro/Header/Header';
import MyProfile from 'components/TeamIntro/Profile/MyProfile';
import Profiles from 'components/TeamIntro/Profile/ProfileData';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import Heart from 'components/TeamIntro/Modal/Heart/Heart';
import SendQuestion from 'components/TeamIntro/Modal/SendQuestion/SendQuestion';

const TeamIntro = () => {
  const [isPremium, setIsPremium] = useRecoilState(isPremiumState); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const profileData = Profiles.find(profile => profile.isMe === true);

  useEffect(() => {
    const checkPremiumStatus = async () => {
      setIsPremium(false);
    };
    checkPremiumStatus();
  }, [setIsPremium]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  const confirmModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Container>
      <Header />
      {profileData && (
        <MyProfile 
          profileData={profileData} 
          isMe={profileData.isMe}  
          isPremium={isPremium} />
      )}
      <Heart onClick={openModal} />
      <NavigationBar />
      
      {isModalOpen && <SendQuestion onClose={closeModal} onConfirm={confirmModal} />}
    </S.Container>
  );
};

export default TeamIntro;
