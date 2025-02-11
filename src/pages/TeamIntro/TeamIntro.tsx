import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isPremiumState } from '../../recoil/state/authStore'; 
import * as S from './Styles'; 
import Header from 'components/TeamIntro/Header/Header';
import MyProfile from 'components/TeamIntro/Profile/MyProfile';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import Heart from 'components/TeamIntro/Modal/Heart/Heart';
import SendQuestion from 'components/TeamIntro/Modal/SendQuestion/SendQuestion';
import Send from 'components/TeamIntro/Modal/Send/Send'
import { TeamData, User } from 'recoil/type/Meeting/TeamDetail';
import { getTeamDetail } from 'api/Meeting/GetTeamDetail';

const TeamIntro = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const location = useLocation();
  const { teamType } = location.state || {};
  const [teamDetailData, setTeamDetailData] = useState<TeamData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPremium, setIsPremium] = useRecoilState(isPremiumState); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchDataAndCheckPremium = async () => {
      setIsLoading(true);

      try {
        if (teamId) {
          const response = await getTeamDetail(Number(teamId));
          if (response?.data) {
            setTeamDetailData(response.data);
          } else {
            setTeamDetailData(null);
          }
        }

        // 프리미엄 상태 확인
        setIsPremium(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setTeamDetailData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndCheckPremium();
  }, [teamId, setIsPremium]);


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
    <S.TeamIntroLayout>
      <Header verification={teamDetailData?.verification ?? 0} name={teamDetailData?.name || ''}/>
      <S.TeamIntroContainer $isPremium={isPremium}>
        {teamDetailData?.userList.map((user: User) => (
        <MyProfile 
          key={user.userId} 
          profileData={user}
          gender={teamDetailData.gender}
          isPremium={isPremium} />
        ))}
      </S.TeamIntroContainer>
      <Heart onClick={openModal} />
      <NavigationBar />
      
      {isModalOpen && <SendQuestion onClose={closeModal} onConfirm={confirmModal} teamName={teamDetailData?.name || ''} teamType={teamType} />}
      {showSend && <Send onClose={closeSendModal} />}
    </S.TeamIntroLayout>
  );
};

export default TeamIntro;
