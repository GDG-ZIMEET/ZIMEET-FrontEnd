import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Booth from './Booth';
import { Getbooths } from '../../../api/booth/Getbooths';
import { Club } from '../../../recoil/type/booth';
import * as amplitude from '@amplitude/analytics-browser';

interface BoothsProps {
  selectedSpace: string;
}

const Booths: React.FC<BoothsProps> = ({ selectedSpace }) => {
  const [booths, setBooths] = useState<Club[]>([]);
  const [selectedFB, setSelectedFB] = useState('front');

  const handleClick = (buttonType: string) => {
    setSelectedFB(buttonType);
    if (selectedSpace === 'S_LEFT') {
      amplitude.track(`[클릭]부스_광장L_${buttonType === 'front' ? '앞' : '뒤'}`);
    } else if (selectedSpace === 'S_RIGHT') {
      amplitude.track(`[클릭]부스_광장R_${buttonType === 'front' ? '앞' : '뒤'}`);
    } else if (selectedSpace === 'A') {
      amplitude.track(`[클릭]부스_안드레아_${buttonType === 'front' ? '앞' : '뒤'}`);
    }
  };

  useEffect(() => {
    const fetchBooths = async () => {
      const response = await Getbooths(selectedSpace);
      if (response) {
        setBooths(response.data.clubList);
      }
    };

    fetchBooths();
  }, [selectedSpace]);

  // 데이터 슬라이스 
  const displayedBooths =
    selectedSpace === 'S_LEFT' || selectedSpace === 'S_RIGHT'
      ? selectedFB === 'front'
        ? booths.slice(0, 6)
        : booths.slice(6)
      : selectedSpace === 'A'
      ? selectedFB === 'front'
        ? booths.slice(0, 8)
        : booths.slice(8)
      : booths;

  const aroundSpace = 
    selectedSpace === 'S_LEFT' || selectedSpace === 'S_RIGHT' 
    ? 'K관'
    : selectedSpace === 'A'
      ? selectedFB === 'front'
        ? 'N관'
        : 'M관'
      : 'N관';
    

  return (
    <S.BoothLayout>
      <S.NBuilding>{aroundSpace}</S.NBuilding>
      <S.BoothsContainer>
        <S.BoothTime>부스 운영 시간 : 11 : 00 ~ 17 : 00</S.BoothTime>
        <S.Booths>
          {displayedBooths.map((booth) => (
          <Booth key={booth.clubId} booth={booth} />
        ))}
        </S.Booths>
      </S.BoothsContainer>
      {!(selectedSpace === 'F') ? (
        <S.SquareRL>
          <S.SquareLeft
            onClick={() => handleClick('front')}
            selected={selectedFB === 'front'}
          >
            앞
          </S.SquareLeft>
          <S.SquareRight
            onClick={() => handleClick('back')}
            selected={selectedFB === 'back'}
          >
            뒤
          </S.SquareRight>
        </S.SquareRL>
      ) : (
        <S.Andrea> M관 </S.Andrea>
      )}
    </S.BoothLayout>
  );
};

export default Booths;
