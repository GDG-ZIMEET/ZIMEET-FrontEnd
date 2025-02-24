import React, { useState } from 'react';
import MakeTeamBox from './MakeTeamBox/MakeTeamBox';
import Help from './Help/Help';
import JoinRandomMeetingButton from './JoinButton/JoinRandomMeetingButton';
import Modal from './Modal/Modal';
import { TicketCount } from './Styles';
import { useNavigate } from 'react-router-dom';

const MeetingRandomMain: React.FC = () => {
  const [isRandomLoading, setIsRandomLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleHelpClick = () => {
    navigate('/notion/termsOfService');
  };

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsRandomLoading(true);
  };

  return (
    <>
      <MakeTeamBox isRandomLoading={isRandomLoading} />
      <Help isRandomLoading={!isRandomLoading} onClick={handleHelpClick} />
      <TicketCount $isRandomLoading={isRandomLoading}>남은 티켓 : 2개</TicketCount>
      <JoinRandomMeetingButton isRandomLoading={isRandomLoading} onClick={handleJoinClick} />
      {isModalOpen && <Modal onClose={handleCloseModal} onConfirm={handleConfirm} />}
    </>
  );
};

export default MeetingRandomMain;
