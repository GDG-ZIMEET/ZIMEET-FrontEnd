import React from 'react';
import * as S from './Styles';

const MakeTeamBox: React.FC = () => {
  return (
    <S.MakeTeamLayout>
      <S.TeamRow>
        <S.FirstPerson>👻</S.FirstPerson>
        <S.SecondPerson>😺</S.SecondPerson>
        <S.ThirdPerson>🐴</S.ThirdPerson>
      </S.TeamRow>
      <S.Loding>💓</S.Loding>
      <S.TeamRow>
        <S.FourthPerson>🐕</S.FourthPerson>
        <S.FifthPerson>⚾</S.FifthPerson>
        <S.SixthPerson>🔥</S.SixthPerson>
      </S.TeamRow>
    </S.MakeTeamLayout>
  );
};

export default MakeTeamBox;
