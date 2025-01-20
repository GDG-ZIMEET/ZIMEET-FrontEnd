import React from 'react';
import { HeartButton, HeartLayOut, HiText, SendText } from './Styles';

const Heart = () => {
  return (
    <HeartLayOut>
        <HeartButton>
          <HiText>Hi</HiText> <SendText>보내기</SendText>
        </HeartButton>
    </HeartLayOut>
  );
};

export default Heart;
