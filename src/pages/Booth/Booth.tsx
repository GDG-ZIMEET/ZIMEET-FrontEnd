import React from 'react';
import * as S from './Styles';
import TypeButton from '../../components/Booth/TypeButton/TypeButton';
import Booths from '../../components/Booth/Booths/Booths';
import Header from '../../components/Booth/Header/Header';
import NavigationBar from 'components/NavigationBar/NavigationBar';

const Booth: React.FC = () => {
  return (
    <S.BoothLayout>
      <S.BoothContainer>
        <Header />
        <TypeButton />
        <S.ColorType>🟥 연애/팅 🟨먹거리 🟩물품판매 🟦이벤트/게임</S.ColorType>
        <S.Explanation>동아리를 <b>길게 눌러</b> 계좌번호를 쉽게 복사해보세요!</S.Explanation>
        <Booths />
      </S.BoothContainer>
      <NavigationBar />
    </S.BoothLayout>
  );
};

export default Booth;