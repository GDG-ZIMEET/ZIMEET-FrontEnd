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
              <S.NextSeasonLayout>
                <S.NextSeasonTitle>
                <b>🥳ZI밋 서비스 종료 및 새로운 시작안내🥳</b><br /><br />
                <S.Zimeettime>
                    서비스 종료까지 남은시간 <br />
                    <p>{calculateRemainingTime()}</p>
                </S.Zimeettime>
                안녕하세요<br /> ZI밋을 이용해주신 모든 분들께 감사드립니다.<br />
                3월 31일부로 ZI밋 서비스가 종료됩니다.<br />
                하지만, 여러분의 많은 관심과 성원 덕분에<br />
                5월 21일, 아우름제에서<br />
                더 나은 기능과 서비스로 돌아올 예정입니다!<br />
                앞으로도 많은 기대와 사랑 부탁드립니다.<br />
                 감사합니다. 💙
                </S.NextSeasonTitle>
                <S.ZimeetLogo />
              </S.NextSeasonLayout>
            </S.BoothContainer> 
            <NavigationBar />
            <GotoMeeting />
        </S.BoothLayout>
    );
};

export default Booth;
