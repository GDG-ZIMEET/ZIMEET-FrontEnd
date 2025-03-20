import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import TypeButton from '../../components/Booth/TypeButton/TypeButton';
import Booths from '../../components/Booth/Booths/Booths';
import Header from '../../components/Booth/Header/Header';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';
import { useRecoilState } from 'recoil';
import { selectedSpaceState } from 'recoil/state/boothState';

const Booth: React.FC = () => {
    const [selectedSpace, setSelectedSpace] = useRecoilState(selectedSpaceState);
    const [currentTime, setCurrentTime] = useState(new Date());

    // 1초마다 현재 시간 업데이트
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    const performances = [
        { time: "18:00 - 18:15", team: "태권도부" },
        { time: "18:15 - 18:40", team: "기가히츠" },
        { time: "18:40 - 18:55", team: "FOM" },
        { time: "18:55 - 19:10", team: "CDZ" },
        { time: "19:10 - 19:25", team: "화랑" },
        { time: "19:45 - 20:00", team: "세이크리드" },
        { time: "20:00 - 20:15", team: "더버스킹" },
        { time: "20:15 - 20:30", team: "밴드실험" },
    ];

    const isCurrentPerformance = (timeRange: string) => {
        const [start, end] = timeRange.split(" - ").map(time => new Date());

        // 공연 시작 시간 설정
        start.setHours(Number(timeRange.split(" - ")[0].split(":")[0]));
        start.setMinutes(Number(timeRange.split(" - ")[0].split(":")[1]));

        // 공연 종료 시간 설정
        end.setHours(Number(timeRange.split(" - ")[1].split(":")[0]));
        end.setMinutes(Number(timeRange.split(" - ")[1].split(":")[1]));

        return currentTime >= start && currentTime <= end;
    };

    return (
        <S.BoothLayout>
            <Header />
            <S.BoothContainer> 
                {/* <TypeButton />
                <S.ColorType>🟥 연애 / 팅 🟨 이벤트 / 게임 🟩 물품판매 🟦 먹거리</S.ColorType>
                <S.Explanation>동아리를 <b>길게 눌러</b> 계좌번호를 쉽게 복사해보세요!</S.Explanation>
                <Booths /> */}
                <S.SetListLayout>
                  <S.SetListContainer>
                    <S.SetListTitle> 🎉🎀 늘품제 중앙무대 🎀🎉</S.SetListTitle>
                    <S.SetContainer>
                        {performances.map((performance, index) => {
                            const isActive = isCurrentPerformance(performance.time);
                            return (
                                <S.SetItem key={index} $isActive={isActive}>
                                    <S.SetTime>{performance.time}</S.SetTime>
                                    <S.SetTeam>{performance.team}</S.SetTeam>
                                </S.SetItem>
                            );
                        })}
                  </S.SetContainer>
                  </S.SetListContainer>
                </S.SetListLayout>
            </S.BoothContainer> 
            <NavigationBar />
            <GotoMeeting />
        </S.BoothLayout>
    );
};

export default Booth;
