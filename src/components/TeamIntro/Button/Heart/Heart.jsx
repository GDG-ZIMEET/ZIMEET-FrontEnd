import React from 'react';
import * as S from './Styles';
import { track } from '@amplitude/analytics-browser';

const Heart = ({ onClick }) => {
    const handleHeartClick = () => {
        track('[클릭]미팅_팀_하이보내기', {
            screen: window.location.pathname,
            timestamp: new Date().toISOString()
        });
        onClick();
    };

  return (
    <S.HeartLayOut>
      <S.HeartButton onClick={handleHeartClick}>
        <S.Hi />
      <S.SendText>보내기</S.SendText>
      </S.HeartButton>
    </S.HeartLayOut>
  );
};

export default Heart;
