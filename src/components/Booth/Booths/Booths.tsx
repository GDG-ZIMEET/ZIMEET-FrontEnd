import React from 'react';
import * as S from './Styles';
import { boothsData } from './boothsData';
import Booth from './Booth';

const Booths: React.FC = () => {
  return (
    <S.BoothLayout>
      <S.NBuilding>N관</S.NBuilding>
      <S.BoothsContainer>
        <S.BoothTime>부스 운영 시간 : 10 : 00 ~ 16 : 00</S.BoothTime>
        <S.Booths>
          {boothsData.map((booth, index) => (
            <Booth key={index} booth={booth} />
          ))}
        </S.Booths>
      </S.BoothsContainer>
      <S.Andrea>안드레아</S.Andrea>
    </S.BoothLayout>
  );
};

export default Booths;
