import { useState } from 'react';
import { useFCM } from '../firebase/useFCM';
import styled from 'styled-components';

const FCMTest = () => {
  const { 
    fcmToken,
    removeFCMToken,
    requestNotificationPermission,
    checkNotificationPermission,
    getFirebaseTokenOnly,
    setFcmToken,
  } = useFCM();
  
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationBody, setNotificationBody] = useState('');

  const handleNotificationPermission = async () => {
    if (checkNotificationPermission()) {
      await requestNotificationPermission();
    }
  };

  const sendTestNotification = async () => {
    if (!notificationTitle || !notificationBody) {
      alert('제목과 내용을 모두 입력해주세요!');
      return;
    }

    try {
      const message = {
        notification: {
          title: notificationTitle,
          body: notificationBody,
          icon: '/zimeet_icon.png'
        }
      };

      console.log('FCM 메시지 전송 시도:', message);
      new Notification(message.notification.title, {
        body: message.notification.body,
        icon: message.notification.icon
      });
    } catch (error) {
      console.error('알림 전송 실패:', error);
      alert('알림 전송에 실패했습니다.');
    }
  };

  // [임시] Firebase 토큰만 받아오는 핸들러
  const handleGetFirebaseToken = async () => {
    const token = await getFirebaseTokenOnly();
    if (token) {
        setFcmToken(token);  // UI에 표시하기 위해 토큰 저장
    }
  };

  return (
    <TestContainer>
      <h2>FCM 푸시 알림 테스트</h2>

      <ButtonGroup>
        <Button 
          onClick={handleNotificationPermission}
          primary>
          푸시 알림 권한 요청
        </Button>
        
        <Button 
          onClick={removeFCMToken}
          secondary>
          FCM 토큰 제거
        </Button>
      </ButtonGroup>

      {/* [임시] Firebase 토큰만 받아오는 버튼 */}
      <Button onClick={handleGetFirebaseToken} primary>
        Firebase 토큰만 받기
      </Button>

      {fcmToken && (
        <TokenContainer>
          <h3>FCM 토큰:</h3>
          <TokenBox>{fcmToken}</TokenBox>
          <TokenInfo>
          </TokenInfo>
        </TokenContainer>
      )}

      <TestForm>
        <Input
          type="text"
          placeholder="알림 제목"
          value={notificationTitle}
          onChange={(e) => setNotificationTitle(e.target.value)}
        />
        <TextArea
          placeholder="알림 내용"
          value={notificationBody}
          onChange={(e) => setNotificationBody(e.target.value)}
        />
        <Button onClick={sendTestNotification} primary>
          테스트 알림 보내기
        </Button>
      </TestForm>
    </TestContainer>
  );
};

const TestContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const TokenContainer = styled.div`
  margin: 20px 0;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const TokenBox = styled.pre`
  word-break: break-all;
  white-space: pre-wrap;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const TokenInfo = styled.p`
  font-size: 0.8em;
  color: #6c757d;
`;

const TestForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
`;

const Button = styled.button<{ primary?: boolean; secondary?: boolean }>`
  padding: 10px 20px;
  background-color: ${props => 
    props.primary ? '#007bff' : 
    props.secondary ? '#6c757d' : 
    '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => 
      props.primary ? '#0056b3' : 
      props.secondary ? '#5a6268' : 
      '#0056b3'};
  }
`;

export default FCMTest;