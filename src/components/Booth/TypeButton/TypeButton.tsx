import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedSpaceState } from '../../../recoil/state/boothState';
import * as S from './Styles';
import * as amplitude from '@amplitude/analytics-browser';

const TypeButton: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useRecoilState(selectedSpaceState);

  const handleClick = (buttonType: string) => {
    setSelectedSpace(buttonType);
    switch(buttonType) {
      case 'S_LEFT':
        amplitude.track('[클릭]부스_광장L');
        break;
      case 'S_RIGHT':
        amplitude.track('[클릭]부스_광장R');
        break;
      case 'A':
        amplitude.track('[클릭]부스_안드레아');
        break;
      case 'F':
        amplitude.track('[클릭]부스_푸드트럭');
        break;
    }
  };

  return (
      <S.TypeLayout>
        <S.TypeComponent>
          <S.FrontN onClick={() => handleClick('S_LEFT')} selected={selectedSpace === 'S_LEFT'}>
            광장 L
          </S.FrontN>
        </S.TypeComponent>
        <S.TypeComponent>
          <S.FrontK onClick={() => handleClick('S_RIGHT')} selected={selectedSpace === 'S_RIGHT'}>
            광장 R
          </S.FrontK>
        </S.TypeComponent>
        <S.TypeComponent>
          <S.SSquare onClick={() => handleClick('A')} selected={selectedSpace === 'A'}>
            안드레아
          </S.SSquare>
        </S.TypeComponent>
        <S.TypeComponent>
          <S.Andrea onClick={() => handleClick('F')} selected={selectedSpace === 'F'}>
            푸드트럭
          </S.Andrea>
        </S.TypeComponent>
      </S.TypeLayout>
  );
};

export default TypeButton;
