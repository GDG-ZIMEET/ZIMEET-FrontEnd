import React, { useEffect } from 'react';
import * as S from './Styles';

interface TypeButtonProps {
  selectedSpace: string;
  setSelectedSpace: (selectedButton: string) => void;
}

const TypeButton: React.FC<TypeButtonProps> = ({ selectedSpace, setSelectedSpace }) => {
  
  const handleClick = (buttonType: string) => {
    setSelectedSpace(buttonType);
  };

  useEffect(() => {
    setSelectedSpace(selectedSpace);
  }, [selectedSpace, setSelectedSpace]);

  return (
    <S.TypeLayout>
      <S.TypeComponent>
        <S.FrontN
          onClick={() => handleClick('S_LEFT')}
          selected={selectedSpace === 'S_LEFT'}
        >
          광장 L
        </S.FrontN>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.FrontK
          onClick={() => handleClick('S_RIGHT')}
          selected={selectedSpace === 'S_RIGHT'}
        >
          광장 R
        </S.FrontK>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.SSquare
          onClick={() => handleClick('A')}
          selected={selectedSpace === 'A'}
        >
          안드레아
        </S.SSquare>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Andrea
          onClick={() => handleClick('F')}
          selected={selectedSpace === 'F'}
        >
          푸드트럭
        </S.Andrea>
      </S.TypeComponent>
    </S.TypeLayout>
  );
};

export default TypeButton;