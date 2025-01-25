import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeamBox from '../../components/MeetingRandom/MakeTeamBox/MakeTeamBox';
import Help from '../../components/MeetingRandom/Help/Help';
import JoinRandomMeetingButton from '../../components/MeetingRandom/JoinButton/JoinRandomMeetingButton';
import Modal from '../../components/MeetingRandom/Modal/Modal';
import NavigationBar from 'components/NavigationBar/NavigationBar';

const MeetingRandom: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    navigate('/meetingRoading');
  };

  const handleHelpClick = () => {
    navigate('/help');
  };

  return (
    <S.MeetingRandomContainer>
      <S.MeetingRandomTitle>팀 갤러리</S.MeetingRandomTitle>
      <TypeButton />
      <MakeTeamBox showGender={false} isLoading={false} showExplain={true} />
      <Help showContainer={true} onClick={handleHelpClick} />
      <S.TicketCount>남은 티켓 : 2개</S.TicketCount>
      <JoinRandomMeetingButton isRoading={false} onClick={handleJoinClick} />
      {isModalOpen && <Modal onClose={handleCloseModal} onConfirm={handleConfirm} />}
      <NavigationBar />
    </S.MeetingRandomContainer>
  );
};

export default MeetingRandom;
