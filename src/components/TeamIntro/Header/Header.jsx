import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.Header>
      <S.BackButton onClick={handleBackClick} />
      <S.Title>팀 소개</S.Title>
    </S.Header>
  );
};

export default Header;
