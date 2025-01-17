import React from 'react';
import * as S from './Styles';

interface AgeBoxProps {
  nickname: string;
  age: number;
  Major: string;
  classNum: number;
  musicStyle: string;
  joinType: '2to2' | '3to3';
}

const AgeBox: React.FC<AgeBoxProps> = ({ nickname, age, Major, classNum, musicStyle, joinType }) => {
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

