import React, { useState } from 'react';
import * as S from './Styles';

const TypeButton: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>('frontN'); 

  const handleClick = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  return (
    <S.TypeLayout>
      <S.TypeComponent>
        <S.FrontN
          onClick={() => handleClick('frontN')}
          selected={selectedButton === 'frontN'}
        >
          N관 앞
        </S.FrontN>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.FrontK
          onClick={() => handleClick('frontK')}
          selected={selectedButton === 'frontK'}
        >
          K관 앞
        </S.FrontK>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.SSquare
          onClick={() => handleClick('SSquare')}
          selected={selectedButton === 'SSquare'}
        >
        성심광장
        </S.SSquare>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Andrea
          onClick={() => handleClick('Andrea')}
          selected={selectedButton === 'Andrea'}
        >안드레아
        </S.Andrea>
      </S.TypeComponent>
      
    </S.TypeLayout>
  );
};

export default TypeButton;
