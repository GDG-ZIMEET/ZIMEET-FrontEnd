import React from 'react';
import { HeartButton, HeartLayOut, HiText, SendText } from './Styles';

const Heart = ({ onClick }) => {
  return (
    <HeartLayOut>
      <HeartButton onClick={onClick}> 
        <HiText>Hi</HiText> <SendText>보내기</SendText>
      </HeartButton>
    </HeartLayOut>
  );
};

export default Heart;
