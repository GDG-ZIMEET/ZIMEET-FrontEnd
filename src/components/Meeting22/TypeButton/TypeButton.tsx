import React, { useState } from 'react';
import * as S from './Styles';

const TypeButton: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>('2to2'); // 기본 선택을 '2to2'로 설정

  const handleClick = (buttonType: string) => {
    setSelectedButton(buttonType);
  };

  return (
    <S.TypeLayout>
      <S.TypeComponent>
        <S.Twoto2
          onClick={() => handleClick('2to2')}
          selected={selectedButton === '2to2'}
        >
          2대2
        </S.Twoto2>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Threeto3
          onClick={() => handleClick('3to3')}
          selected={selectedButton === '3to3'}
        >
          3대3
        </S.Threeto3>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Random
          onClick={() => handleClick('random')}
          selected={selectedButton === 'random'}
        >
          랜덤
        </S.Random>
      </S.TypeComponent>
      <S.lookComponent>
<<<<<<< Updated upstream
        {<S.lookword>이성 팀만 보여요👀</S.lookword>}
=======
        {/*<S.lookword>이성 팀만 보여요👀</S.lookword>*/}
>>>>>>> Stashed changes
      </S.lookComponent>
    </S.TypeLayout>
  );
};

export default TypeButton;
