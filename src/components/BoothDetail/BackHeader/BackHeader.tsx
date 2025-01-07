import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';

const BackHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <S.HeaderLayout>
      <S.BackButton onClick={handleBackClick} />
      <S.Title>🟥 연애/팅</S.Title>
    </S.HeaderLayout>
    );
}

export default BackHeader;
    