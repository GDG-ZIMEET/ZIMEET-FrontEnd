import { useEffect, useState } from 'react';
import * as S from './Styles';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import { colors,stageTypes, timelines} from '../../data/SetListData';
import { StageList } from '../../utils/SetListUtils';

const SetList = () => {
  const [activeDay, setActiveDay] = useState(1); // 1 = DAY 1, 2 = DAY 2
  const days = [1, 2];
  const [currentTime, setCurrentTime] = useState(new Date());

  // 1초마다 현재 시간 업데이트
  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  const isCurrentPerformance = (timeRange: string, day: number) => {
    const [startTime, endTime] = timeRange.split(" ~ ");
  
    const year = 2025;
    const month = 4; // 5월
    const realDay = day === 1 ? 21 : 22; // DAY1은 21일, DAY2는 22일
  
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);
  
    const start = new Date(year, month, realDay, startHour, startMinute);
    const end = new Date(year, month, realDay, endHour, endMinute);
  
    return currentTime >= start && currentTime <= end;
  };


  // 현재 activeDay의 공연중인 stage
  const currentDayStages = StageList.filter((stage) => stage.Day === activeDay);
  const currentPerformance = currentDayStages.find((stage) => isCurrentPerformance(stage.time, stage.Day));

  // 만약 현재 진행중인 공연 없으면 첫 번째 공연 기준
  const headerStage = currentPerformance || currentDayStages[0];


  return (
    <>
    <NavigationBar />
    <S.SetListLayout>
      <S.SetListHeader $stageType={colors[headerStage.stageType as "artist" | "club" | "other" | "event"]}>
        <S.HeaderLogoIcon />
        <S.HeaderInfoContainer>
          <S.HeaderComponent>
            <S.DayText>DAY {activeDay}</S.DayText>
            <S.StageTitle $fontSize={headerStage?.font}>{headerStage?.name || ''}</S.StageTitle>
          </S.HeaderComponent>
          <S.TimeText>{headerStage?.time || ''}</S.TimeText>
        </S.HeaderInfoContainer>
      </S.SetListHeader>
      <S.ChangeDay>
        {days.map((day, index) => (
          <S.DayButtonContainer key={day} $isLast={index === days.length - 1}onClick={() => setActiveDay(day)}>
            <S.DayButton $isActive={activeDay === day}>
              DAY {day}
            </S.DayButton>
          </S.DayButtonContainer>
          ))}
      </S.ChangeDay>
      <S.StageType>
      {stageTypes.map((item, index) => (
        <S.StageTypeContainer key={index}>
          <S.SquareIcon color={item.color}/>
          <S.StageTypeText>{item.label}</S.StageTypeText>
        </S.StageTypeContainer>
      ))}
      </S.StageType>
      <S.StageListContainer>
        <S.TimeLine>
          {timelines[activeDay as 1 | 2].map((item, idx) => {
          if (item.time) {
            return <S.TimeLineText key={idx}>{item.time}</S.TimeLineText>;
          } else if (item.icon) {
            return <S.TimeLineIcon key={idx} />;
          } else if (item.whiteCircle) {
            return <S.TimeWhiteCircle key={idx} />;
          } else if (item.lineHeight) {
            return <S.Line key={idx} height={item.lineHeight} />;
          }
          return null;
        })}
        </S.TimeLine>
        <S.StageList>
            {StageList.filter((stage) => stage.Day === activeDay).map((stage) => {
              const isActive = isCurrentPerformance(stage.time, stage.Day);
              
              // 끝난 공연이면 'end' 색으로
              const isEnded = !isActive && currentTime > new Date(2025, 4, stage.Day === 1 ? 21 : 22, 
                Number(stage.time.split(' ~ ')[1].split(':')[0]), 
                Number(stage.time.split(' ~ ')[1].split(':')[1])
              );

              const colorType = isEnded ? 'end' : stage.stageType;

              return (
                <S.StageItem key={stage.id} $isActive={isActive} >
                  <S.StageColor $stageType={colors[colorType as "artist" | "club" | "other" | "event"]} />
                  <S.StageTime>{stage.time}</S.StageTime>
                  <S.StageName>{stage.name}</S.StageName>
                </S.StageItem>
              );
            })}
        </S.StageList>
      </S.StageListContainer>
    </S.SetListLayout>
    </>
  );
}

export default SetList;