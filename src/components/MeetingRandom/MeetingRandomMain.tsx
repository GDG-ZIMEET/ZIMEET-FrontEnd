import React, { useEffect, useState } from 'react';
import MakeTeamBox from './MakeTeamBox/MakeTeamBox';
import Help from './Help/Help';
import JoinRandomMeetingButton from './JoinButton/JoinRandomMeetingButton';
import Modal from './Modal/Modal';
import { TicketCount } from './Styles';
import { useNavigate } from 'react-router-dom';
import { getRandomTicket } from 'api/Meeting/GetRandomTicket';
import { connectWebSocketRandom,  cancelMatching } from "api/Meeting/WebRandom";
import { getRandomNow } from 'api/Meeting/GetRandomnow';
import { RandomNowResponseType } from 'recoil/type/Meeting/RandomNowType';

const MeetingRandomMain: React.FC = () => {
  const [isRandomLoading, setIsRandomLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticket, setTicket] = useState<number | null>(null);
  const [randomNowData, setRandomNowData] = useState<RandomNowResponseType | null>(null);
  const [matchingStatus, setMatchingStatus] = useState<string>('');
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
  useEffect(() => {
    if (isRandomLoading) {
      const fetchRandomNowData = async () => {
        const response = await getRandomNow();
        console.log('랜덤데이터',response);
        if (response) {
          setRandomNowData(response);
        }
      };
      fetchRandomNowData();
    }
  }, [isRandomLoading]);
    
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
    connectWebSocketRandom(handleMatchingStatus,randomNowData?.data.matchingId);
  };

  // 매칭 상태를 업데이트하는 콜백 함수
  const handleMatchingStatus = (data: any) => {
    if (data.status === 'COMPLETE') {
      setMatchingStatus('매칭 완료');
      console.log('매칭 완료');
    } else {
      setMatchingStatus(`대기중: ${data.users.length}/6명`);
      console.log(`대기중: ${data.users.length}/6명`);
    }
  };

  const handleCancel = () => {
    cancelMatching(); // 서버에 취소 요청
    setIsRandomLoading(false); // 로딩 상태 해제
    setRandomNowData(null);
  };

  return (
    <>
      <MakeTeamBox isRandomLoading={isRandomLoading} randomNowData={randomNowData}/>
      <Help isRandomLoading={!isRandomLoading} onClick={handleHelpClick} />
      <TicketCount $isRandomLoading={isRandomLoading}>남은 티켓 : {ticket}개</TicketCount>
      <JoinRandomMeetingButton isRandomLoading={isRandomLoading} onClick={isRandomLoading ? handleCancel : handleJoinClick}/>
      {isModalOpen && <Modal onClose={handleCloseModal} onConfirm={handleConfirm} ticket={ticket}/>}
    </>
  );
};

export default MeetingRandomMain;
