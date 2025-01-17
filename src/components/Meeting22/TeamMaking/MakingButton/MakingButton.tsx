import React from 'react';
import * as S from './Styles';
import SituationText from './SituationText';

const MakingButton: React.FC = () => {
  const situation = 1;

  return (
    <S.MakingButtonLayout>
      <S.SituationBox>
        <SituationText situation={situation} />
      </S.SituationBox>
    </S.MakingButtonLayout>
  );
};

export default MakingButton;
