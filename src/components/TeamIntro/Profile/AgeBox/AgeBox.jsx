import React from 'react';
import * as S from './Styles';

const AgeBox = ({ nickname, age, Major, classNum, musicStyle }) => {
  return (
    <S.AgeBoxLayout>
      <S.Component>
        <S.NAC><span className="bold">{nickname}</span> | {age}세 ({classNum}학번)</S.NAC>
        <S.Music>{musicStyle}</S.Music>
      </S.Component>
      <S.MajorContainer>
        <S.Major>{Major}</S.Major>
      </S.MajorContainer>
    </S.AgeBoxLayout>
  );
};

export default AgeBox;
