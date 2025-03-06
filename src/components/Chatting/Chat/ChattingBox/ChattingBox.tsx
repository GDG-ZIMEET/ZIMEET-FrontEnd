import React, { useRef, useEffect } from 'react';
import * as S from './Styles';
import { getMessageResponseType } from '../../../../recoil/type/Chatting/MessageType';
import { authState } from 'recoil/state/authState';
import { useRecoilValue } from 'recoil';
import { getImageByEmoji } from 'utils/IconMapper';

interface ChattingBoxProps {
  messages: getMessageResponseType[];
}

const ChattingBox: React.FC<ChattingBoxProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const auth = useRecoilValue(authState);
  
  //스크롤을 최신 메시지로 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  
  return (
    <S.ChattingBox>
      {messages.map((message, index) => {
          const isMine = auth?.userId === message.senderId;
          const isFirstOfGroup =
           index === 0 || messages[index - 1].senderId !== message.senderId;

          return (
          <S.MessageContainer key={message.id} isMine={isMine}>
            {!isMine && isFirstOfGroup && (
              <S.Avatar>
                {getImageByEmoji(message.emoji)}
              </S.Avatar>
            )}
            <S.MessageContent isMine={isMine}>
              {isFirstOfGroup && !isMine && <S.MessageUser>{message.senderName}</S.MessageUser>}
              <S.MessageText isMine={isMine} >{message.content}</S.MessageText>
            </S.MessageContent>
          </S.MessageContainer>
        );
      })}
      <S.MessagesEnd ref={messagesEndRef} />
    </S.ChattingBox>
  );
};

export default ChattingBox;
