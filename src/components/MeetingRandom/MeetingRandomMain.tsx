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
import * as Sentry from '@sentry/react';
import { getRandomNow } from "./../../api/Meeting/GetRandomnow";

const MeetingRandomMain: React.FC = () => {
  const [isRandomLoading, setIsRandomLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ticket, setTicket] = useState<number | null>(null);
  const [randomNowData, setRandomNowData] = useState<RandomTeamType | null>(null);
  const [navigateOnComplete, setNavigateOnComplete] = useState<boolean>(false);

  const navigate = useNavigate();
  const wasCanceledRef = useRef(false);
  
  useEffect(() => {
    track('[접속]미팅_랜덤(회원)');
      const fetchData = async () => {
      try {
        const ticketResponse = await getRandomTicket();
        if (ticketResponse) {
            setTicket(ticketResponse.data.ticket);
        }
      } catch (e) {
        Sentry.captureException(e);
      }

      try {
        const nowResponse = await getRandomNow();
        if (nowResponse?.data) {
          setRandomNowData(nowResponse.data);
          if (nowResponse.data.matchingStatus === 'WAITING') {
            setIsRandomLoading(true);
            wasCanceledRef.current = false;
            setNavigateOnComplete(true);
          } else if (nowResponse.data.matchingStatus === 'COMPLETE') {
            setNavigateOnComplete(false);
          }
        }
      } catch (e: any) {
        const code = e?.response?.data?.code || e?.code;
        if (code === 'MATCHING4002') {
          // no-op
        } else {
          Sentry.captureException(e);
        }
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
    setNavigateOnComplete(true);
    track('[클릭]미팅_랜덤_참여모달_참여');
    console.log(isRandomLoading, '매칭이 시작되었습니다.');

    //실시간 상태 구독
    if (ticket !== null && ticket <= 0) {
      alert('티켓 수가 부족합니다');
      navigate('/mypage');
    }
    try {
      await startMatchingProcess(setRandomNowData, wasCanceledRef);
    } catch (error) {
      Sentry.captureException(error);
      if (!wasCanceledRef.current) {
        alert('매칭에 실패했어요 ㅜㅜ. 다시 시도해주세요.');
      }
      setIsRandomLoading(false);
      setRandomNowData(null);
    }}

  const handleCancel = async () => {
    wasCanceledRef.current = true;
    track('[클릭]미팅_랜덤_취소');
    try {
      await cancelMatching();
    } catch (e) {
      console.warn('취소 중 에러:', e);
    } finally {
      setIsRandomLoading(false);
      setRandomNowData(null);
      console.log(isRandomLoading, '매칭이 취소되었습니다.');
    }
  };

  return (
    <>
      <MakeTeamBox isRandomLoading={isRandomLoading} randomNowData={randomNowData} navigateOnComplete={navigateOnComplete}/>
      <Help isRandomLoading={isRandomLoading} randomNowData={randomNowData} navigateOnComplete={navigateOnComplete} />
      <TicketCount $isRandomLoading={isRandomLoading}>남은 티켓 : {ticket}개</TicketCount>
      <JoinRandomMeetingButton isRandomLoading={isRandomLoading} onClick={isRandomLoading ? handleCancel : handleJoinClick}/>
      {isModalOpen && <Modal onClose={handleCloseModal} onConfirm={handleConfirm} ticket={ticket}/>}
    </>
  );
};

export default MeetingRandomMain;
