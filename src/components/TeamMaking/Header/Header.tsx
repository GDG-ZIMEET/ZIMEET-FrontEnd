import React from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <S.Header>
      <S.BackButton onClick={handleBackClick} />
      <S.Title>랜덤미팅 도움말</S.Title>
    </S.Header>
  );
};

export default Header;