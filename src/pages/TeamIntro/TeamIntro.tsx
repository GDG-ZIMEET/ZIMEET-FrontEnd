import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isPremiumState } from '../../recoil/state/authStore'; 
import * as S from './Styles'; 
import Header from 'components/TeamIntro/Header/Header';
import MyProfile from 'components/TeamIntro/Profile/MyProfile';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import Heart from 'components/TeamIntro/Button/Heart/Heart';
import SendQuestion from 'components/TeamIntro/Modal/SendQuestion/SendQuestion';
import Send from 'components/TeamIntro/Modal/Send/Send'
import SentHiButton from 'components/TeamIntro/Button/SentHiButton/SentHiButton';
import { TeamData, User } from 'recoil/type/Meeting/TeamDetail';
import { getTeamDetail } from 'api/Meeting/GetTeamDetail';
import AcceptHiModal from "components/Chatting/ReceiveHi/Modal/AcceptHiModal/AcceptHiModal";
import AcceptedHiModal from "components/Chatting/ReceiveHi/Modal/AcceptedHiModal/AcceptedHiModal";
import RefuseHiModal from "components/Chatting/ReceiveHi/Modal/RefuseHiModal/RefuseHiModal";
import RefusedHiModal from "components/Chatting/ReceiveHi/Modal/RefusedHiModal/RefusedHiModal";

const TeamIntro = () => {
  const [isHiSent, setIsHiSent] = useState(false); 
  const { teamId } = useParams<{ teamId: string }>();
  const location = useLocation();
  const { teamType, HiType, from } = location.state || {};
  const [teamDetailData, setTeamDetailData] = useState<TeamData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPremium, setIsPremium] = useRecoilState(isPremiumState); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRefuseModalOpen, setIsRefuseModalOpen] = useState(false);
  const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false);
  const [isRefusedModalOpen, setIsRefusedModalOpen] = useState(false);
  
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

  //미팅모달 
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

  //하이모달
  const openAcceptModal = () => {
    setIsAcceptModalOpen(true);
};
const closeAcceptModal = () => {
    setIsAcceptModalOpen(false);
};

const openAcceptedModal = () => {
    setIsAcceptModalOpen(false);
    setIsAcceptedModalOpen(true);
};
const closeAcceptedModal = () => {
    setIsAcceptedModalOpen(false);
    navigate('/chattingInventory');
};

const openRefuseModal = () => {
    setIsRefuseModalOpen(true);
};
const closeRefuseModal = () => {
    setIsRefuseModalOpen(false);
};

const openRefusedModal = () => {
    setIsRefuseModalOpen(false);
    setIsRefusedModalOpen(true);
};
const closeRefusedModal = () => {
    setIsRefusedModalOpen(false);
    navigate('/receiveHi');
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
      {isHiSent
          ? <SentHiButton/>
          : (from === "meeting" ? (
              <Heart onClick={openModal} /> 
          ) : (
              <S.ButtonWrapper>
                <S.RefuseButton onClick={openRefuseModal}>거절</S.RefuseButton>
                <S.Button onClick={openAcceptModal}>하이 수락하기</S.Button>
              </S.ButtonWrapper>
          ))}
      <NavigationBar />
      
      {isModalOpen && <SendQuestion onClose={closeModal} onConfirm={confirmModal} teamName={teamDetailData?.name || ''} teamType={teamType} />}
      {showSend && <Send onClose={closeSendModal} />}
      
      {isAcceptModalOpen && <AcceptHiModal onClose={closeAcceptModal} onConfirm={openAcceptedModal} teamName={teamDetailData?.name || ''}/>}
      {isAcceptedModalOpen && <AcceptedHiModal onClose={closeAcceptedModal}/>}
      {isRefuseModalOpen && <RefuseHiModal onClose={closeRefuseModal} onConfirm={openRefusedModal} teamName={teamDetailData?.name || ''}/>}
      {isRefusedModalOpen && <RefusedHiModal onClose={closeRefusedModal}/>}
    </S.TeamIntroLayout>
  );
};

export default TeamIntro;
