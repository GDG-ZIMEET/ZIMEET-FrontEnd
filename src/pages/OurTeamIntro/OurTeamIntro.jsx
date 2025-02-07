import React from 'react';
import * as S from './Styles'; 
import Header from 'components/OurTeamIntro/Header/Header'; 
import MyProfile from 'components/OurTeamIntro/Profile/MyProfile';
import Profiles from 'components/OurTeamIntro/Profile/ProfileData';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import TipModal from 'components/OurTeamIntro/Modal/TipModal/TipModal';
const OurTeamIntro = () => {
  const profileData = Profiles.filter(profile => profile.isMe === true).slice(0, 2);

  return (
    <S.Container>
      <Header />
      {profileData && profileData.map((profile, index) => (
        <MyProfile 
          key={index} 
          profileData={profile} 
          isMe={profile.isMe} />
      ))}
      <TipModal/>
      <NavigationBar />
    </S.Container>
  );
};

export default OurTeamIntro;
