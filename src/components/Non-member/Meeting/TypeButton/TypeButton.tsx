import React, { useState } from 'react';
import * as S from './Styles';

const TypeButton: React.FC = () => {
  
  return (
    <S.TypeLayout>
      <S.TypeComponent>
        <S.Twoto2>2대2</S.Twoto2>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Threeto3>3대3</S.Threeto3>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Random>랜덤 </S.Random>
      </S.TypeComponent>
    </S.TypeLayout>
  );
};

export default TypeButton;
