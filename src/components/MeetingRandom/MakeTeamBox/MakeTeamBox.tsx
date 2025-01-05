import React from 'react';
import * as S from './Styles';

interface MakeTeamBoxProps {
  showGender: boolean;
  isLoading: boolean;
}

const MakeTeamBox: React.FC<MakeTeamBoxProps> = ({ showGender, isLoading }) => {
  return (
    <S.MakeTeamLayout>
      <S.GirlComponent show={showGender}>여자</S.GirlComponent>
      <S.TeamRow>
        <S.FirstPerson>👻</S.FirstPerson>
        <S.SecondPerson>😺</S.SecondPerson>
        <S.ThirdPerson>{isLoading ? '❔' : '🐴'}</S.ThirdPerson>
      </S.TeamRow>
      <S.Loding>{isLoading ? '💗' : '💓'}</S.Loding>
      <S.BoyComponent show={showGender}>남자</S.BoyComponent>
      <S.TeamRow>
        <S.FourthPerson>🐕</S.FourthPerson>
        <S.FifthPerson>⚾</S.FifthPerson>
        <S.SixthPerson>🔥</S.SixthPerson>
      </S.TeamRow>
    </S.MakeTeamLayout>
  );
};

export default MakeTeamBox;
