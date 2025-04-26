import * as S from './Styles';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';

const SetList = () => {
  return (
    <>
    <NavigationBar />
    <S.SetListLayout>
      <S.SetListHeader />
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