import React, { useState } from 'react';
import * as S from './Styles';
import Header from '../../../components/Booth/Header/Header';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';

const GdgocIntroduct: React.FC = () => {
  

  return (
    <S.GdgocIntroductLayout>
      <Header />
      <S.AboutGdgocCuk />
      <S.Explanation1>
        이 서비스 너무 유용한데? 누가 만들었지!
      </S.Explanation1>
      <S.Explanation2>
        바로, Google Developer Groups on Campus CUK!
      </S.Explanation2>
      <S.BigLogo />
      <GotoMeeting />
      <S.gdgExplanation1>
        GDGoC CUK는 이런 동아리에요!
      </S.gdgExplanation1>
      <S.gdgExplanation2>
        GDGoC CUK가 3기에 했던 활동
      </S.gdgExplanation2>
      <S.gdgExplanation3>
        GDGoC CUK가 학우분들께 OPEN 했던 행사
      </S.gdgExplanation3>
      <S.gdgExplanation4>
       동아리가 인플루언서, 네이버, SKT 현직 분들을 모셨다고?!
      </S.gdgExplanation4>
      <NavigationBar />
    </S.GdgocIntroductLayout>
  );
};

export default GdgocIntroduct;
