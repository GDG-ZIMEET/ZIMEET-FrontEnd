import * as S from './Styles';
import { useFCM } from '../../../../firebase/useFCM';

const NotificationButton = () => {
    const { requestNotificationPermission } = useFCM();
    const isNotificationEnabled = Notification.permission === 'granted';
    const handleNotificationPermission = async () => {
        await requestNotificationPermission();
    };

    if (isNotificationEnabled) return null;

    return (
        <S.NotificationLayout>
            <S.NotificationButton onClick={handleNotificationPermission}>
                <S.NotificationIcon />
                <S.NotificationText>눌러서 하이 받을 때, 채팅 올 때 알림 받기</S.NotificationText>
            </S.NotificationButton>
        </S.NotificationLayout>
    );
};

export default NotificationButton; 