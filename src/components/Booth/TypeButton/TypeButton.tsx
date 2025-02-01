import React from 'react';
import { useRecoilState } from 'recoil';
import * as S from './Styles';
import { selectedButtonState, selectedSquareRLState } from '../../../recoil/state/boothState';

const TypeButton: React.FC = () => {
  const [selectedButton, setSelectedButton] = useRecoilState(selectedButtonState);
  const [selectedSquareRL, setSelectedSquareRL] = useRecoilState(selectedSquareRLState);

  //성심광장 누르면 좌우 선택 버튼
  const handleClick = (buttonType: string) => {
    setSelectedButton(buttonType);
    if (buttonType === 'SSQUARE') {
      setSelectedSquareRL('S_LEFT'); 
    } else {
      setSelectedSquareRL('');
    }
  };

  return (
    <S.TypeLayout>
      <S.TypeComponent>
        <S.FrontN
          onClick={() => handleClick('N')}
          selected={selectedButton === 'N'}
        >
          N관 앞
        </S.FrontN>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.FrontK
          onClick={() => handleClick('K')}
          selected={selectedButton === 'K'}
        >
          K관 앞
        </S.FrontK>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.SSquare
          onClick={() => handleClick('SSQUARE')}
          selected={selectedButton === 'SSQUARE'}
        >
          성심광장
        </S.SSquare>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Andrea
          onClick={() => handleClick('A')}
          selected={selectedButton === 'A'}
        >
          안드레아
        </S.Andrea>
      </S.TypeComponent>
    </S.TypeLayout>
  );
};

export default TypeButton;