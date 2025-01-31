import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './Styles';
import Booth from './Booth';
import { Getbooths } from '../../../api/booth/Getbooths';
import { boothState, selectedButtonState, selectedSquareRLState } from '../../../recoil/state/boothState';
import { Club } from '../../../recoil/type/booth';

const Booths: React.FC = () => {
  const [booths, setBooths] = useRecoilState<Club[]>(boothState);
  const [selectedSquareRL, setSelectedSquareRL] = useRecoilState(selectedSquareRLState);
  const selectedButton = useRecoilValue(selectedButtonState);

  const handleClick = (buttonType: string) => {
    setSelectedSquareRL(buttonType);
  };

  useEffect(() => {
    const fetchBooths = async () => {
      let place = selectedButton;
      if (selectedButton === 'SSQUARE') {
        place = selectedSquareRL;
      }
      const response = await Getbooths(place);
      if (response) {
        setBooths(response.data.clubList);
        console.log("Fetched Booths:", response.data.clubList);
      }
    };

    fetchBooths();
  }, [selectedButton, selectedSquareRL, setBooths]);

  return (
    <S.BoothLayout>
      <S.NBuilding>N관</S.NBuilding>
      <S.BoothsContainer>
          {selectedButton === 'SSQUARE' ? (
          <S.SquareRL>
            <S.SquareLeft
              onClick={() => handleClick('S-LEFT')}
              selected={selectedSquareRL === 'S-LEFT'}
            >
              좌
            </S.SquareLeft>
            <S.SquareRight
              onClick={() => handleClick('S-RIGHT')}
              selected={selectedSquareRL === 'S-RIGHT'}
            >
              우
            </S.SquareRight>
          </S.SquareRL>
        ) : (
          <S.BoothTime>부스 운영 시간 : 10 : 00 ~ 16 : 00</S.BoothTime>
        )}
        <S.Booths>
          {booths.map((booth) => (
          <Booth key={booth.clubId} booth={booth} />
        ))}
        </S.Booths>
      </S.BoothsContainer>
      <S.Andrea>안드레아</S.Andrea>
    </S.BoothLayout>
  );
};

export default Booths;
