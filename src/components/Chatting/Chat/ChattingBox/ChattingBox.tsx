import React, { useRef, useEffect } from 'react';
import * as S from './Styles';

interface ChattingBoxProps {
  messages: { id: number; user: string; text: string; avatar: string }[];
}

const ChattingBox: React.FC<ChattingBoxProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  //스크롤을 최신 메시지로 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <S.ChattingBox>
      {messages.map((message, index) => {
        const showUser = index === 0 || messages[index - 1].user !== message.user; 
        const isSameUser = index > 0 && messages[index - 1].user === message.user; 
                return (
          <S.MessageContainer key={message.id} isMine={message.user === 'Me'}>
            {message.user !== 'Me' && (
              <S.Avatar show={showUser}>
                {message.avatar}
              </S.Avatar>
            )}
            <S.MessageContent isMine={message.user === 'Me'}>
              {showUser && message.user !== 'Me' && <S.MessageUser>{message.user}</S.MessageUser>}
              <S.MessageText isMine={message.user === 'Me'} isSameUser={isSameUser}>{message.text}</S.MessageText>
            </S.MessageContent>
          </S.MessageContainer>
        );
      })}
      <S.MessagesEnd ref={messagesEndRef} />
    </S.ChattingBox>
  );
};

export default ChattingBox;
