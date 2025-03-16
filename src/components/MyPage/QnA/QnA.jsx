import * as S from './Styles';
import {ReactComponent as View} from '../../../assets/icon/Meeting22/View.svg'
import { useNavigate } from 'react-router-dom';

const QnA = ({myProfileData}) => {
  const isLoggedIn = !!myProfileData?.data;
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
        <S.QnAContainer $isLoggedIn={isLoggedIn}>
            <S.Title>문의하기</S.Title>
            <S.QnAs >
                <S.QnAContent>1대1 문의하기</S.QnAContent>
                <View/>
            </S.QnAs>
            <S.QnAs>
                <S.QnAContent>자주 묻는 질문</S.QnAContent>
                <View/>
            </S.QnAs>
            <S.QnAs>
                <S.QnAContent>알림 설정하는 법</S.QnAContent>
                <View/>
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/meetingGuide')}>
                <S.QnAContent>미팅 잘하는 법</S.QnAContent>
                <View/>
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/randomMeetingGuide')}>
                <S.QnAContent>랜덤미팅 참여 방법</S.QnAContent>
                <View/>
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/developmentTeam')}>
                <S.QnAContent>ZI밋 개발팀 소개</S.QnAContent>
                <View/>
            </S.QnAs>
        </S.QnAContainer>
  );
};

export default QnA;