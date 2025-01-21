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

  const profileData = Profiles.filter(profile => profile.isMe === true).slice(0, 2);

  useEffect(() => {
    const checkPremiumStatus = async () => {
      setIsPremium(true);
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
      {profileData && profileData.map((profile, index) => (
        <MyProfile 
          key={index} 
          profileData={profile} 
          isMe={profile.isMe}  
          isPremium={isPremium} />
      ))}
      <Heart onClick={openModal} />
      <NavigationBar />
      
      {isModalOpen && <SendQuestion onClose={closeModal} onConfirm={confirmModal} />}
    </S.Container>
  );
};

export default TeamIntro;
