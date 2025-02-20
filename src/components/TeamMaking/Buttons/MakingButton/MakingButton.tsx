import React from 'react';
import * as S from './Styles';
import SituationText from './SituationText';

interface MakingButtonProps {
  situation: number;
  onClick: () => void;
}

const MakingButton: React.FC<MakingButtonProps> = ({ situation, onClick }) => {

  return (
    <S.MakingButtonLayout>
      <S.TwoLimitText $situation={situation}>어뷰징 방지를 위해 팀 만들기는 인당 2회로 제한돼요.</S.TwoLimitText>
      <S.SituationBox $situation={situation} onClick={onClick}>
        <SituationText situation={situation} />
      </S.SituationBox>
    </S.MakingButtonLayout>
  );
};

export default MakingButton;
