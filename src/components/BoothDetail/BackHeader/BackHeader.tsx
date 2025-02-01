import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as S from './Styles';
import { boothDetailState } from '../../../recoil/state/boothState';

const BackHeader: React.FC = () => {
  const navigate = useNavigate();
  const boothDetail = useRecoilValue(boothDetailState);

  const handleBackClick = () => {
    navigate(-1); 
  };

  const getTitle = (category: string) => {
    switch (category) {
      case 'GOODS':
        return '🟩 물품판매';
      case 'FOOD':
        return '🟨 먹거리';
      case 'DATE':
        return '🟥 연애/팅';
      case 'EVENT':
        return '🟦 이벤트/게임';
      default:
        return '부스';
    }
  };

  const title = boothDetail ? getTitle(boothDetail.data.category) : '부스';

  return (
    <S.HeaderLayout>
      <S.BackButton onClick={handleBackClick} />
      <S.Title>{title}</S.Title>
    </S.HeaderLayout>
  );

}

export default BackHeader;
    