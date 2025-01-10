import React, { useState } from 'react';
import * as S from './Styles';

const ChattingInventoryTypeButton: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>('Chatting'); // 기본 선택을 '2to2'로 설정

  const handleClick = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  return (
    <S.ChattingTypeLayout>
      <S.ChattingTypeComponent>
        <S.Chatting
          onClick={() => handleClick('Chatting')}
          selected={selectedButton === 'Chatting'}
        >
          채팅 
        </S.Chatting>
      </S.ChattingTypeComponent>
      <S.ChattingTypeComponent>
        <S.ReceiveHi
          onClick={() => handleClick('receiveHi')}
          selected={selectedButton === 'receiveHi'}
        >
          받은 하이
        </S.ReceiveHi>
      </S.ChattingTypeComponent>
      <S.ChattingTypeComponent>
        <S.SendHi
          onClick={() => handleClick('sendHi')}
          selected={selectedButton === 'sendHi'}
        >
          보낸 하이
        </S.SendHi>
      </S.ChattingTypeComponent>
    </S.ChattingTypeLayout>
  );
};

export default ChattingInventoryTypeButton;
