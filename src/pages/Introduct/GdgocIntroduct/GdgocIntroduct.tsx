import React from 'react';
import * as S from './Styles';
import Header from '../../../components/Booth/Header/Header';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';

const GdgocIntroduct: React.FC = () => {
  

  return (
    <S.GdgocIntroductLayout>
      <Header />
      <S.GdgocContainer>
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
          <b>GDGoC CUK는 이런 동아리에요!</b> <br />
          GDGoC CUK는 학생 개발자 그룹으로 <br />
          *네트워크 형성과 성장*을 목표로 해요! <br />
          다양한 스터디를 진행하며 멤버 간 활발한 소통을 통해 인적<br />
          네트워크를 구축할 수 있어요!<br />
          또한, 1기부터 현재 기수까지 자유롭게 교류할 수 있는<br />
          Discord 채널에서 대외활동, 대회, 행사, 취업 정보 등을 <br />
          공유받을 수도 있어요!:)
        </S.gdgExplanation1>
        <S.gdgExplanation2>
        <b>GDGoC CUK가 3기에 했던 활동</b><br />
        [Networking] <u/> [Events] <br />
        - print "Hello Buddy" <span /> - Tech Talk Live <br />
        - Cloud of Idea <a /> - GGUM 연합해커톤 <br/>
        <p>- Grand Finale</p>  <br/>
        [Study] <br/>
        - AI돞 모아보기 -AWS로 인프라 공부하기 -CS 스터디<br />
        -HTML+CSS+자바스크립트 : 프론트 입문부터 심화까지<br />
        -Figma와 Blender를 활용한 UX/UI 디자인<br />
        -도커 & 쿠버네티스 스터디 - 스프링부트 입문 스터디<br />
        -자바기본부터 스프링 입문까지 -공모전스터디<br />
        -정보보안 : 웹해킹 + 암호학 - 이론, 실습<br />
        -풀스택 프로젝트 -응애 나 아기 Kaggler
        </S.gdgExplanation2>
        <S.gdgExplanation3>
          <b>GDGoC CUK가 학우분들께 OPEN 했던 행사</b><br />
          동아리가 인플루언서, 네이버, SKT 현직 분들을 모셨다고?!<br />
          <br />
          현직 개발자 혹은 직장에 다니고 있는 GDSC Alumni(졸업생)들을<br />
          초청하여 '학생 개발자들을 위해 해주고 싶은 말'을 주제로 20분 <br />
          동안의 강연과 10분 동안의 Q&A 시간을 가졌어요!
        </S.gdgExplanation3>
      </S.GdgocContainer>
      <NavigationBar />
    </S.GdgocIntroductLayout>
  );
};

export default GdgocIntroduct;
