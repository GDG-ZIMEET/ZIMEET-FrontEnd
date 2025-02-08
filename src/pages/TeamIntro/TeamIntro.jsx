import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isPremiumState } from '../../recoil/state/authStore'; 
import * as S from './Styles'; 
import Header from 'components/TeamIntro/Header/Header';
import MyProfile from 'components/TeamIntro/Profile/MyProfile';
import Profiles from 'components/TeamIntro/Profile/ProfileData';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import Heart from 'components/TeamIntro/Button/Heart/Heart';
import SentHiButton from 'components/TeamIntro/Button/SentHiButton/SentHiButton';
import SendQuestion from 'components/TeamIntro/Modal/SendQuestion/SendQuestion';
import Send from 'components/TeamIntro/Modal/Send/Send';

const TeamIntro = () => {
  const [isPremium, setIsPremium] = useRecoilState(isPremiumState);
  const [isHiSent, setIsHiSent] = useState(false); // TODO : API 연결 후 RecoilState로 변경
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const navigate = useNavigate(); 

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
    setShowSend(true); 
    setIsModalOpen(false);  
  };

  const closeSendModal = () => {
    setShowSend(false);
    navigate('/Meeting22');  
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
      {isHiSent
          ? <SentHiButton/>
          : <Heart onClick={openModal} /> }
      <NavigationBar />
      
      {isModalOpen && <SendQuestion onClose={closeModal} onConfirm={confirmModal} />}
      {showSend && <Send onClose={closeSendModal} />}
    </S.Container>
  );
};

export default TeamIntro;
