import React, { useEffect, useRef, useState } from 'react';
import MakeTeamBox from './MakeTeamBox/MakeTeamBox';
import Help from './Help/Help';
import JoinRandomMeetingButton from './JoinButton/JoinRandomMeetingButton';
import Modal from './Modal/Modal';
import { TicketCount } from './Styles';
import { useNavigate } from 'react-router-dom';
import { getRandomTicket } from 'api/Meeting/GetRandomTicket';
import { startMatchingProcess,  cancelMatching } from "api/Meeting/WebRandom";
import { RandomTeamType } from 'recoilStores/type/Meeting/RandomNowType';
import { track } from '@amplitude/analytics-browser';

const MeetingRandomMain: React.FC = () => {
  const [isRandomLoading, setIsRandomLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticket, setTicket] = useState<number | null>(null);
  const [randomNowData, setRandomNowData] = useState<RandomTeamType | null>(null);
  const navigate = useNavigate();
  const wasCanceledRef = useRef(false);
  
  useEffect(() => {
    track('[접속]미팅_랜덤(회원)');
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
    track('[클릭]미팅_랜덤_도움말(회원)');
  };

  const handleJoinClick = () => {
    setIsModalOpen(true);
    track('[클릭]미팅_랜덤_참여');
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    track('[클릭]미팅_랜덤_참여모달_취소');
  };

  const handleConfirm = async () => {
    setIsModalOpen(false);
    wasCanceledRef.current = false;
    setIsRandomLoading(true);
    track('[클릭]미팅_랜덤_참여모달_참여');
    //실시간 상태 구독
    if (ticket !== null && ticket <= 0) {
      alert('티켓 수가 부족합니다');
      navigate('/mypage');
    }
    try {
      await startMatchingProcess(setRandomNowData, wasCanceledRef);
    } catch (error) {
      if (!wasCanceledRef.current) {
        alert('매칭에 실패했어요 ㅜㅜ. 다시 시도해주세요.');
      }
      setIsRandomLoading(false);
      setRandomNowData(null);
    }}

  const handleCancel = () => {
    wasCanceledRef.current = true;
    cancelMatching(); // 서버에 취소 요청
    setIsRandomLoading(false); // 로딩 상태 해제
    setRandomNowData(null);
    track('[클릭]미팅_랜덤_취소');
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
