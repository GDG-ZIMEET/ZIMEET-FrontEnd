import { useState, useEffect } from 'react';
import { messaging, getToken, onMessage } from '../firebase/firebaseConfig';
import { publicAxios } from '../api/axiosConfig';
import { useRecoilValue } from 'recoil';
import { authState } from '../recoilStores/state/authState';

export const useFCM = () => {
    const [fcmToken, setFcmToken] = useState<string | null>(null);
    const { isAuthenticated } = useRecoilValue(authState);

    // Mockup
    const generateMockToken = () => {
        return `mock_fcm_token_${Math.random().toString(36).substring(7)}`;
    };
    const mockRequestAndSaveToken = async () => {
        try {
            const permission = await Notification.requestPermission();
            
            if (permission === 'granted') {
                const mockToken = generateMockToken();
                setFcmToken(mockToken);
                
                alert('푸시 알림 권한이 허용되었습니다!');
                console.log('목업 FCM 토큰 생성됨:', mockToken);
                
                console.log('푸시 알림 동의 API 호출 성공');
                console.log('FCM 토큰 저장 API 호출 성공');

                return mockToken;
            } else {
                alert('푸시 알림 권한이 거부되었습니다.');
            }
        } catch (error) {
            console.error('FCM 토큰 요청 실패:', error);
            alert('FCM 토큰 요청 중 오류가 발생했습니다.');
        }
    };
    const mockRemoveFCMToken = async () => {
        if (fcmToken) {
            try {
                console.log('FCM 토큰 제거 API 호출 성공');
                setFcmToken(null);
                alert('FCM 토큰이 제거되었습니다.');
            } catch (error) {
                console.error('FCM 토큰 제거 실패:', error);
                alert('FCM 토큰 제거 중 오류가 발생했습니다.');
            }
        }
    };


    const requestAndSaveToken = async () => {
        try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            const token = await getToken(messaging, {
                vapidKey: 'BF8vXsYNnmHWvoWgxNhtuDyoqyA8lrFDM7Ld27Sw8MNGYcQ3trdkKapx4-P3XAKKbYj6Kv6q73xxKSASKEAnfBU'
            });
            
            setFcmToken(token);
        
            await publicAxios.post('/api/fcm/push-agree', {
                agree: true
            });

            await publicAxios.post('/api/fcm/token', {token});

            return token;
        }
        } catch (error) {
        console.error('FCM 토큰 요청 실패:', error);
        }
    };

    const removeFCMToken = async () => {
        if (fcmToken) {
        try {
            await publicAxios.delete(`/api/user/logout?fcmToken=${fcmToken}`);
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
            new Notification(payload.notification?.title || '새로운 알림', {
                body: payload.notification?.body,
                icon: payload.notification?.icon
            });
        });

        return () => unsubscribe();
        }
    }, [isAuthenticated]);

    return {
        fcmToken,
        requestAndSaveToken,
        removeFCMToken,
        mockRemoveFCMToken,
        mockRequestAndSaveToken
    };
};