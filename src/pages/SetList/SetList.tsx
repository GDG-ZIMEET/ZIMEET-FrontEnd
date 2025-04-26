import { useState } from 'react';
import * as S from './Styles';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import { colors,stageTypes  } from './SetListData';

const SetList = () => {
  const [activeDay, setActiveDay] = useState(1); // 1 = DAY 1, 2 = DAY 2
  const days = [1, 2];

  return (
    <>
    <NavigationBar />
    <S.SetListLayout>
      <S.SetListHeader>
        <S.HeaderLogoIcon />
        <S.HeaderInfoContainer>
          <S.HeaderComponent>
            <S.DayText>DAY 1</S.DayText>
            <S.StageTitle>Unofficial Club</S.StageTitle>
          </S.HeaderComponent>
          <S.TimeText>00:00 ~ 00:00</S.TimeText>
        </S.HeaderInfoContainer>
      </S.SetListHeader>
      <S.ChangeDay>
        {days.map((day, index) => (
            <S.DayButton
              key={day}
              isActive={activeDay === day}
              isLast={index === days.length - 1}
              onClick={() => setActiveDay(day)}
            >
              DAY {day}
            </S.DayButton>
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
        <S.TimeLine />
        <S.StageList />
      </S.StageListContainer>
    </S.SetListLayout>
    </>
  );
}

export default SetList;