import React from 'react';
import * as S from './Styles';

interface MakeTeamBoxProps {
  showGender: boolean;
  isLoading: boolean;
  showExplain: boolean;
}

const MakeTeamBox: React.FC<MakeTeamBoxProps> = ({ showGender, isLoading, showExplain }) => {
  return (
    <S.MakeTeamLayout>
      {showExplain && (
        <S.explainComponent>
          <S.line1>친구도 얻고, 연인도 얻고!</S.line1>
          <S.line2>랜덤 미팅은 1인 신청으로 빠르게 참여!</S.line2>
        </S.explainComponent>
      )}
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
