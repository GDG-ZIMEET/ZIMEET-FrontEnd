import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { useFCM } from '../../../firebase/useFCM';

const QnA = () => {
    const isLoggedIn = localStorage.getItem('accessToken') ? true : false;
    const navigate = useNavigate();
    const { requestNotificationPermission } = useFCM();

    const isNotificationEnabled = Notification.permission === 'granted';

    const handleNotificationPermission = async () => {
        if (isNotificationEnabled) {
            alert('[ZI밋] 이미 푸시 알림 동의가 되어있습니다! 계속 알림이 오지 않는다면 문의하기로 연락해주세요.');
        }
        await requestNotificationPermission();
    };

    const handleNavigate = (path, eventName) => {
        track(`[클릭]${eventName}`);

        if (path.startsWith('http')) {
            window.location.href = path;
        } else {
            navigate(path);
        }
    };

    return (
        <S.QnAContainer >
            <S.Title>문의하기</S.Title>
            {/* <S.AlarmButton onClick={handleNotificationPermission}>
                <S.NotificationIcon />
                <S.AlarmText>눌러서 하이 받을 때, 채팅 올 때 알림 받기</S.AlarmText>
            </S.AlarmButton> */}
            <S.QnAs onClick={() => handleNavigate('http://pf.kakao.com/_gHxmin', '마이_1대1문의하기')}>
                <S.QnAContent>1대1 문의하기</S.QnAContent>
                <S.View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/faq', '마이_자주묻는질문')}>
                <S.QnAContent>자주 묻는 질문</S.QnAContent>
                <S.View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/notificationSetting', '마이_알림설정하는법')}>
                <S.QnAContent>알림 설정하는 법</S.QnAContent>
                <S.View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/meetingGuide', '마이_미팅잘하는법')}>
                <S.QnAContent>미팅 잘하는 법</S.QnAContent>
                <S.View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/randomMeetingGuide', '마이_랜덤미팅참여방법')}>
                <S.QnAContent>랜덤미팅 참여 방법</S.QnAContent>
                <S.View />
            </S.QnAs>
            <S.QnAs onClick={() => handleNavigate('/notion/developmentTeam', '마이_ZI밋개발팀소개')}>
                <S.QnAContent>ZI밋 개발팀 소개</S.QnAContent>
                <S.View />
            </S.QnAs>
        </S.QnAContainer>
    );
};

export default QnA;