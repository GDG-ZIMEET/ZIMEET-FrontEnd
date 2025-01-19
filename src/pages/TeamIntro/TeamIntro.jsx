import React from 'react';
import { useRecoilState } from 'recoil';
import { isPremiumState } from '../../recoil/state/authStore'; 
import * as S from './Styles'; 
import Header from 'components/TeamIntro/Header/Header';
import ProfileDetail from 'components/TeamIntro/Profile/ProfileDetail/ProfileDetail';
import AgeBox from 'components/TeamIntro/Profile/AgeBox/AgeBox';


const TeamIntro = () => {
  const [isPremium, setIsPremium] = useRecoilState(isPremiumState);

return (
  <S.Container>
    <Header></Header>
    <AgeBox/>
    <ProfileDetail/>
    <S.Title>팀 소개 페이지</S.Title>
    {isPremium ? (
      <S.Section>
        <h2>프리미엄 회원 전용 콘텐츠</h2>
        <S.Content>여기서는 팀의 프리미엄 멤버들과 특별한 혜택을 확인할 수 있습니다!</S.Content>
      </S.Section>
    ) : (
      <S.Section>
        <h2>일반 회원 콘텐츠</h2>
        <S.Content>여기에서는 기본 팀 정보를 확인할 수 있습니다.</S.Content>
      </S.Section>
    )}
    <S.Button onClick={() => setIsPremium(!isPremium)} isPremium={isPremium}>
      {isPremium ? '프리미엄 권한 해제' : '프리미엄 권한 활성화'}
    </S.Button>
  </S.Container>
);
};

export default TeamIntro;