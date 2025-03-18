import React from 'react';
import * as S from './Styles';
import Header from '../../../components/Booth/Header/Header';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';

const ZimeetIntroduct: React.FC = () => {
  

  return (
    <S.ZimeetIntroductLayout>
      <Header />
      <S.ZimeetContainer>
        <S.Zimeet />
        <S.Explanation1>
          지금, 만나요!<br />
          Z들의 미팅, 지밋에서 :)<br />
        </S.Explanation1>
        <S.Explanation2>
          Google 학생 개발자그룹 <br />
          GDG on Campus CUK 학생들이 만든 미팅 "지밋" <br />
          어떻게 참여하나요?<br />
          🙋‍♀️
        </S.Explanation2>
        <S.IntroductComponent>
          <S.IntroductTitle>첫번째, 매력적인 팀 만들기</S.IntroductTitle>
          <S.Heart3d />
          <S.Introduct>
              눈길을 끄는 정보는 <b>팀명, 이모지, 음악취향</b>이 제일 강해요!<br />
              우리팀의 특색을 담은 팀명과 이모지를 선택해주세요!
          </S.Introduct>
        </S.IntroductComponent>

        <S.IntroductComponent>
          <S.IntroductTitle>두번째, 마음에 들면 하이👋 보내기</S.IntroductTitle>
          <S.Hi3d />
          <S.Introduct>
              지밋은 모든 팀에게 무료 하이를 제공해요!:)<br />
              하이를 보내고, 상대 팀이 수락하면 채팅이 열려요!
          </S.Introduct>
        </S.IntroductComponent>

        <S.IntroductComponent>
          <S.IntroductTitle>세 번째, 채팅에서 나만의 매력 뽐내기</S.IntroductTitle>
          <S.Chat3d />
          <S.Introduct>
              채팅이 열리면 반갑게 인사해요:)<br />
              상대팀과 자유롭게 대화 후 서로 동의하에 만남을 기약해요!
          </S.Introduct>
        </S.IntroductComponent>
      </S.ZimeetContainer>
      <NavigationBar />
      <GotoMeeting />
    </S.ZimeetIntroductLayout>
  );
};

export default ZimeetIntroduct;
