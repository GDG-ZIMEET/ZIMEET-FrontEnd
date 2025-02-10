import React from 'react';
import * as S from './Styles';

const Heart = ({ onClick }) => {
  return (
    <S.HeartLayOut>
      <S.HeartButton onClick={onClick}> 
      <S.Hi />
      <S.SendText>보내기</S.SendText>
      </S.HeartButton>
    </S.HeartLayOut>
  );
};

export default Heart;
