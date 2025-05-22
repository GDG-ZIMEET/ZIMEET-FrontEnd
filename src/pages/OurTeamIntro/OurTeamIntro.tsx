import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/OurTeamIntro/Header/Header';
import MyProfile from 'components/Common/Profile/MyProfile';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import TipModal from 'components/OurTeamIntro/Modal/TipModal/TipModal';
import { getOurTeamDetail } from '../../api/Meeting/GetourTeamDetail';
import { useLocation } from 'react-router-dom';
import { TeamData, User } from '../../recoilStores/type/Meeting/TeamDetail';
import Certification from 'components/OurTeamIntro/Modal/Certification/Certification';
import NotificationButton from 'components/OurTeamIntro/Modal/NotificationButton/NotificationButton';

const OurTeamIntro = () => {
  const location = useLocation();
  const { teamType } = location.state || {};
  const [ourteamDetailData, setOurTeamDetailData] = useState<TeamData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeamDetailData = async () => {
      setIsLoading(true);
      try {
        const response = await getOurTeamDetail(teamType);
        if (response?.data) {
          setOurTeamDetailData(response.data);
        } else {
          setOurTeamDetailData(null);
        }
      } catch (error) {
        console.error('Error fetching team data:', error);
        setOurTeamDetailData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamDetailData();
  }, [teamType]);

  if (isLoading) {
    return (
      <S.OurTeamIntroLayout>
        <S.LoadingContainer />
      </S.OurTeamIntroLayout>
    );
  }

  return (
    <S.OurTeamIntroLayout>
      <Header teamType={teamType}/>
      <S.OurTeamIntroContainer>
        {ourteamDetailData?.userList.map((user: User) => (
          <MyProfile
            key={user.userId}
            profileData={user}
            gender={ourteamDetailData.gender}
            isPremium={true}
          />
        ))}
      </S.OurTeamIntroContainer>
      {ourteamDetailData?.verification === 1 ? <Certification /> : <TipModal />}
      {/*<NotificationButton />*/}
      <NavigationBar />
    </S.OurTeamIntroLayout>
  );
};

export default OurTeamIntro;
