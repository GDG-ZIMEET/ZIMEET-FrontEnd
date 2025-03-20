import * as S from './Styles';
import { ReactComponent as View } from '../../../assets/icon/Meeting22/View.svg';
import { useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';

const QnA = ({ myProfileData }) => {
    const isLoggedIn = !!myProfileData?.data;
    const navigate = useNavigate();

    const handleNavigate = (path, eventName) => {
        track(`[클릭]${eventName}`);

        if (path.startsWith('http')) {
            window.location.href = path;
        } else {
            navigate(path);
        }
    };

    return (
        <S.QnAContainer $isLoggedIn={isLoggedIn}>
            <S.Title>문의하기</S.Title>
            <S.QnAs onClick={() => handleNavigate('http://pf.kakao.com/_uVsTn/chat', '마이_1대1문의하기')}>
                <S.QnAContent>1대1 문의하기</S.QnAContent>
                <View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/faq', '마이_자주묻는질문')}>
                <S.QnAContent>자주 묻는 질문</S.QnAContent>
                <View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/notificationSetting', '마이_알림설정하는법')}>
                <S.QnAContent>알림 설정하는 법</S.QnAContent>
                <View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/meetingGuide', '마이_미팅잘하는법')}>
                <S.QnAContent>미팅 잘하는 법</S.QnAContent>
                <View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/randomMeetingGuide', '마이_랜덤미팅참여방법')}>
                <S.QnAContent>랜덤미팅 참여 방법</S.QnAContent>
                <View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/developmentTeam', '마이_ZI밋개발팀소개')}>
                <S.QnAContent>ZI밋 개발팀 소개</S.QnAContent>
                <View />
            </S.QnAs>
        </S.QnAContainer>
    );
};

export default QnA;