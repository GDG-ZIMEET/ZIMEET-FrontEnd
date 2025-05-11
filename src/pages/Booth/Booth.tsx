import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import TypeButton from '../../components/Booth/TypeButton/TypeButton';
import Booths from '../../components/Booth/Booths/Booths';
import Header from '../../components/Booth/Header/Header';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';
import { useRecoilState } from 'recoil';
import { selectedSpaceState } from 'recoilStores/state/boothState';

const Booth: React.FC = () => {
    const [selectedSpace, setSelectedSpace] = useRecoilState(selectedSpaceState);
    const [currentTime, setCurrentTime] = useState(new Date());
    const targetTime = new Date('2025-03-31T15:00:00Z');

    // 1초마다 현재 시간 업데이트
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const calculateRemainingTime = () => {
        const timeDiff = targetTime.getTime() - currentTime.getTime();
        if (timeDiff <= 0) {
            return "서비스 종료됨";
        }
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        return days > 0 
        ? `${days}일 ${hours}시간 ${minutes}분` 
        : `${hours}시간 ${minutes}분`;
    };

    return (
        <S.BoothLayout>
            <Header />
            <S.BoothContainer> 
                <TypeButton />
                <S.ColorType>🟥 연애 / 팅 🟨 이벤트 / 게임 🟩 물품판매 🟦 먹거리</S.ColorType>
                <S.Explanation>동아리를 <b>길게 눌러</b> 계좌번호를 쉽게 복사해보세요!</S.Explanation>
                <Booths />
            </S.BoothContainer> 
            <NavigationBar />
            <GotoMeeting />
        </S.BoothLayout>
    );
};

export default Booth;
