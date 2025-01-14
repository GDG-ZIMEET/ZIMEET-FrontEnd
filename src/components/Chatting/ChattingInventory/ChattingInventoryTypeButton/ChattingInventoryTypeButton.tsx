import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Styles';

const ChattingInventoryTypeButton: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>('Chatting');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/chattingInventory')) {
      setSelectedButton('Chatting');
    } else if (location.pathname.includes('/receiveHi')) {
      setSelectedButton('receiveHi');
    }
  }, [location]);

  const handleClick = (buttonType: string) => {
    setSelectedButton(buttonType);
    if (buttonType === 'Chatting') {
      navigate('/chattingInventory');
    } else if (buttonType === 'receiveHi') {
      navigate('/receiveHi');
    }
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
