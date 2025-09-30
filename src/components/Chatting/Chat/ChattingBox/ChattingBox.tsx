import React, { useRef, useEffect } from 'react';
import * as S from './Styles';
import { getMessageResponseType } from '../../../../recoilStores/type/Chatting/MessageType';
import { authState } from 'recoilStores/state/authState';
import { useRecoilValue } from 'recoil';
import { getImageByEmoji } from 'utils/IconMapper';

interface ChattingBoxProps {
  messages: getMessageResponseType[];
}

const ChattingBox: React.FC<ChattingBoxProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { userId } = useRecoilValue(authState);

  return (
    <S.ChattingBox>
      {messages.map((message, index) => {
        const key = message.id
          ? `${message.id}-${index}`
          : `${message.type}-${message.sendAt}-${index}`;

        const isMine = userId === message.senderId;
        const isFirstOfGroup =
          index === 0 || messages[index - 1].senderId !== message.senderId;

        if (message.type === 'EXIT') {
          return (
            <S.ExitMessageContainer key={key}>
              {message.content}
            </S.ExitMessageContainer>
          );
        }
        return (
          <S.MessageContainer key={key} $isMine={isMine}>
            {!isMine && isFirstOfGroup && (
              <S.Avatar>
                <img src={getImageByEmoji(message.emoji)} alt={message.emoji} />
              </S.Avatar>
            )}
            <S.MessageContent $isMine={isMine} $isFirstOfGroup={isFirstOfGroup}>
              {isFirstOfGroup && !isMine && (
                <S.MessageUser>{message.senderName}</S.MessageUser>
              )}
              <S.MessageText $isMine={isMine}>{message.content}</S.MessageText>
            </S.MessageContent>
          </S.MessageContainer>
        );
      })}
      <S.MessagesEnd ref={messagesEndRef} />
    </S.ChattingBox>
  );
};

export default ChattingBox;
