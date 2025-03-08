import React, { useEffect, useState } from 'react';
import MakeTeamBox from './MakeTeamBox/MakeTeamBox';
import Help from './Help/Help';
import JoinRandomMeetingButton from './JoinButton/JoinRandomMeetingButton';
import Modal from './Modal/Modal';
import { TicketCount } from './Styles';
import { useNavigate } from 'react-router-dom';
import { getRandomTicket } from 'api/Meeting/GetRandomTicket';
import { connectWebSocketRandom, disconnectWebSocket, cancelMatching } from "api/Meeting/WebRandom";

const MeetingRandomMain: React.FC = () => {
  const [isRandomLoading, setIsRandomLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticket, setTicket] = useState<number | null>(null);
  const [matchingId, setMatchingId] = useState<string | null>(null);
  const [matchingStatus, setMatchingStatus] = useState<any>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
      const fetchData = async () => {
        const response = await getRandomTicket();
        if (response) {
          setTicket(response.data.ticket);
        }
      };
      fetchData();
    }, []);
    
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
    //실시간 상태 구독
    connectWebSocketRandom(handleMatchingId, handleMatchingStatus);
  };

  // 매칭 ID를 저장하는 콜백 함수
  const handleMatchingId = (id: string) => {
    setMatchingId(id);
  };

  // 매칭 상태를 업데이트하는 콜백 함수
  const handleMatchingStatus = (status: any) => {
    setMatchingStatus(status);
    if (status.matchingComplete) {
      setIsRandomLoading(false);
    }
  };

  const handleCancel = () => {
    cancelMatching(); // 서버에 취소 요청
    setIsRandomLoading(false); // 로딩 상태 해제
    setMatchingId(null); // 매칭 ID 초기화
    setMatchingStatus(null); // 매칭 상태 초기화
  };

  return (
    <>
      <MakeTeamBox isRandomLoading={isRandomLoading} />
      <Help isRandomLoading={!isRandomLoading} onClick={handleHelpClick} />
      <TicketCount $isRandomLoading={isRandomLoading}>남은 티켓 : {ticket}개</TicketCount>
      <JoinRandomMeetingButton isRandomLoading={isRandomLoading} onClick={isRandomLoading ? handleCancel : handleJoinClick}/>
      {isModalOpen && <Modal onClose={handleCloseModal} onConfirm={handleConfirm} ticket={ticket}/>}
    </>
  );
};

export default MeetingRandomMain;
