import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedFBState, selectedSpaceState, boothState } from '../../../recoil/state/boothState';
import * as S from './Styles';
import Booth from './Booth';
import { Getbooths } from '../../../api/booth/Getbooths';
import * as amplitude from '@amplitude/analytics-browser';

const Booths: React.FC = () => {
  const [booths, setBooths] = useRecoilState(boothState);
  const [selectedFB, setSelectedFB] = useRecoilState(selectedFBState);
  const selectedSpace = useRecoilValue(selectedSpaceState);

  const handleClick = (buttonType: string) => {
    setSelectedFB(buttonType);
    amplitude.track(`[클릭]부스_${selectedSpace}_${buttonType === 'front' ? '앞' : '뒤'}`);
  };

  useEffect(() => {
    const fetchBooths = async () => {
      const response = await Getbooths(selectedSpace);
      if (response) {
        setBooths(response.data.clubList);
      }
    };

    fetchBooths();
  }, [selectedSpace, setBooths]);

  const displayedBooths =
      selectedSpace === 'F'
          ? booths // 푸드트럭은 전체 리스트 표시
          : selectedSpace === 'S_LEFT' || selectedSpace === 'S_RIGHT'
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
              : '차도';

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
        {selectedSpace !== 'F' ? (
            <S.SquareRL>
              <S.SquareLeft onClick={() => handleClick('front')} selected={selectedFB === 'front'}>
                앞
              </S.SquareLeft>
              <S.SquareRight onClick={() => handleClick('back')} selected={selectedFB === 'back'}>
                뒤
              </S.SquareRight>
            </S.SquareRL>
        ) : (
            <S.Andrea>M관</S.Andrea>
        )}
      </S.BoothLayout>
  );
};

export default Booths;
