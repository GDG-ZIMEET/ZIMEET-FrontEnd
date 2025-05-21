import { useState, useEffect } from 'react';
import { messaging, getToken, onMessage } from '../firebase/firebaseConfig';
import { privateAxios } from '../api/axiosConfig';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoilStores/state/authState';

export const useFCM = () => {
    const [fcmToken, setFcmToken] = useState<string | null>(null);
    const { isAuthenticated } = useRecoilValue(authState);

    const requestAndSaveToken = async () => {
        try {
            // 이미 권한이 허용된 경우
            const currentPermission = Notification.permission;
            if (currentPermission === 'granted') {
                const token = await getToken(messaging, {
                    vapidKey: 'BF8vXsYNnmHWvoWgxNhtuDyoqyA8lrFDM7Ld27Sw8MNGYcQ3trdkKapx4-P3XAKKbYj6Kv6q73xxKSASKEAnfBU'
                });
                console.log('FCM token:',token);
                setFcmToken(token);
                
                const pushAgreeResponse = await privateAxios.post('/fcm/push-agree', {
                    pushAgree: true
                });
                console.log('푸시 POST 완료 | 서버 응답:', pushAgreeResponse.data);
                
                const tokenResponse = await privateAxios.post('/fcm/token', {
                    fcmToken: fcmToken
                });
                console.log(fcmToken);
                console.log('FCM token POST 완료 | 서버 응답:', tokenResponse.data);
                return fcmToken;
            }
            
            // 권한이 없는 경우
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                const token = await getToken(messaging, {
                    vapidKey: 'BF8vXsYNnmHWvoWgxNhtuDyoqyA8lrFDM7Ld27Sw8MNGYcQ3trdkKapx4-P3XAKKbYj6Kv6q73xxKSASKEAnfBU'
                });
                console.log('FCM token:',token);
                setFcmToken(token);
                
                const pushAgreeResponse = await privateAxios.post('/fcm/push-agree', {
                    pushAgree: true
                });
                console.log('푸시 알림 동의 상태가 서버에 전송되었습니다.', pushAgreeResponse.data);
                
                const tokenResponse = await privateAxios.post('/fcm/token', {
                    fcmToken: token
                });
                console.log('FCM 토큰이 서버에 저장되었습니다:', token, '서버 응답:', tokenResponse.data);
                return token;
            } else if (permission === 'denied') {
                alert('하이, 채팅 푸시 알림을 받으시려면 브라우저 설정에서 알림 권한을 허용해주세요.');
            }
        } catch (error) {
            console.error('FCM 토큰 요청 실패:', error);
        }
    };

    const removeFCMToken = async () => {
        if (fcmToken) {
            try {
                await privateAxios.delete('/api/user/logout', {
                    headers: {
                        'X-FCM-TOKEN': fcmToken
                    }
                });
                setFcmToken(null);
            } catch (error) {
                console.error('FCM 토큰 제거 실패:', error);
            }
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
        const unsubscribe = onMessage(messaging, (payload) => {
            console.log('메시지 수신:', payload);
        });

        return () => unsubscribe();
        }
    }, [isAuthenticated]);

    const checkNotificationPermission = () => {
        if (Notification.permission === 'denied') {
            alert('하이, 채팅 푸시 알림을 받으시려면 브라우저 설정에서 알림 권한을 허용해주세요.');
            return false;
        }
        return true;
    };

    const requestNotificationPermission = async () => {
        if (Notification.permission === 'denied') {
            alert('하이, 채팅 푸시 알림을 받으시려면 브라우저 설정에서 알림 권한을 허용해주세요.');
            return false;
        }
        else {
            return await requestAndSaveToken();
        }
    };

    /**
     * [임시 함수] 서버 API 호출 없이 Firebase에서만 FCM 토큰을 받아오는 함수
     * 서버 연결이 안 되어있을 때 테스트용으로만 사용
     */
    const getFirebaseTokenOnly = async () => {
        try {
            // 브라우저 알림 권한 요청
            const permission = await Notification.requestPermission();
            
            if (permission === 'granted') {
                // Firebase에서 FCM 토큰 발급
                const token = await getToken(messaging, {
                    vapidKey: 'BF8vXsYNnmHWvoWgxNhtuDyoqyA8lrFDM7Ld27Sw8MNGYcQ3trdkKapx4-P3XAKKbYj6Kv6q73xxKSASKEAnfBU'
                });
                
                // 토큰을 상태에 저장
                setFcmToken(token);
                console.log('FCM token:', token);
                return token;
            } else if (permission === 'denied') {
                alert('푸시 알림을 받으시려면 브라우저 설정에서 알림 권한을 허용해주세요.');
            }
        } catch (error) {
            console.error('Firebase 토큰 요청 실패:', error);
        }
    };

    return {
        fcmToken,
        setFcmToken,
        requestAndSaveToken,
        removeFCMToken,
        checkNotificationPermission,
        requestNotificationPermission,
        getFirebaseTokenOnly  // [임시] 서버 API 호출 없이 Firebase 토큰만 받아오는 함수
    };
};