import * as S from './Styles';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';

const SetList = () => {
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
      <S.ChangeDay />
      <S.StageType />
      <S.StageListContainer>
        <S.TimeLine />
        <S.StageList />
      </S.StageListContainer>
    </S.SetListLayout>
    </>
  );
}

export default SetList;