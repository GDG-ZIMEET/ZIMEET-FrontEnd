import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import * as S from './Styles';

const ChattingInventoryTypeButton: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>('Chatting');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/chattingInventory')) {
      setSelectedButton('Chatting');
      track('[접속]채팅_채팅목록');
    } else if (location.pathname.includes('/receiveHi')) {
      setSelectedButton('receiveHi');
      track('[접속]채팅_받은하이');
    } else if (location.pathname.includes('/sentHi')) {
      setSelectedButton('sentHi');
      track('[접속]채팅_보낸하이');
    }
  }, [location]);

  const handleClick = (buttonType: string) => {
    setSelectedButton(buttonType);
    if (buttonType === 'Chatting') {
      track('[클릭]채팅_채팅목록');
      navigate('/chattingInventory');
    } else if (buttonType === 'receiveHi') {
      track('[클릭]채팅_받은하이');
      navigate('/receiveHi');
    } else if (buttonType === 'sentHi') {
      track('[클릭]채팅_보낸하이');
      navigate('/sentHi');
    }
  };

  return (
    <S.ChattingTypeLayout>
      <S.ChattingTypeComponent>
        <S.Chatting
          onClick={() => handleClick('Chatting')}
          selected={selectedButton === 'Chatting'}
        >
          채팅방
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
          onClick={() => handleClick('sentHi')}
          selected={selectedButton === 'sentHi'}
        >
          보낸 하이
        </S.SendHi>
      </S.ChattingTypeComponent>
    </S.ChattingTypeLayout>
  );
};

export default ChattingInventoryTypeButton;
