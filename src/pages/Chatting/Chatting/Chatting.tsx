import React, { useState, useEffect, useRef } from 'react';
import * as S from './Styles';

const Chatting = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'User1', text: '안녕하세요!', avatar: 'user1.png' },
    { id: 2, user: 'User2', text: '반갑습니다!', avatar: 'user2.png' },
    { id: 3, user: 'User2', text: '여러 개 입력한 메시지 중 첫 번째입니다.', avatar: 'user2.png' },
    { id: 4, user: 'User3', text: '오늘 날씨 좋네요.', avatar: 'user3.png' },
    { id: 5, user: 'User3', text: '여러 개 입력한 메시지 중 첫 번째입니다.', avatar: 'user3.png' },
    { id: 6, user: 'User3', text: '여러 개 입력한 메시지 중 두 번째입니다.', avatar: 'user3.png' },
    { id: 7, user: 'User1', text: '여러 개 입력한 메시지 중 첫 번째입니다.', avatar: 'user1.png' },
    { id: 8, user: 'User1', text: '여러 개 입력한 메시지 중 두 번째입니다.', avatar: 'user1.png' },
    { id: 9, user: 'User1', text: '여러 개 입력한 메시지 중 세 번째입니다.', avatar: 'user1.png' },
    { id: 10, user: 'User1', text: '여러 개 입력한 메시지 중 네 번째입니다.', avatar: 'user1.png' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: 'Me', text: input, avatar: 'me.png' }]);
      setInput('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleBackClick = () => {  };

  return (
    <S.ChattingContainer>
      <S.Header>
        <S.BackButton onClick={handleBackClick} />
        <S.ChattingTitle>채팅방 이름</S.ChattingTitle>
      </S.Header>
      <S.ChattingBox>
        {messages.map((message, index) => {
          const showUser = index === 0 || messages[index - 1].user !== message.user;
          const borderRadius = showUser ? (message.user === 'Me' ? '8px 0 8px 8px' : '0 8px 8px 8px') : '8px';
          return (
            <S.MessageContainer key={message.id} isMine={message.user === 'Me'} borderRadius={borderRadius}>
              <S.Avatar src={message.avatar} alt={`${message.user} avatar`} show={showUser} />
              <S.MessageContent isMine={message.user === 'Me'}>
                {showUser && message.user !== 'Me' && <S.MessageUser>{message.user}</S.MessageUser>}
                <S.MessageText isMine={message.user === 'Me'} borderRadius={borderRadius}>{message.text}</S.MessageText>
              </S.MessageContent>
            </S.MessageContainer>
          );
        })}
        <div ref={messagesEndRef} />
      </S.ChattingBox>
      <S.InputContainer>
        <S.ChatInput
          placeholder="메시지를 입력해주세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <S.SendButton onClick={handleSend}>^</S.SendButton>
      </S.InputContainer>
    </S.ChattingContainer>
  );
};

export default Chatting;

