import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import NavigationBar from 'components/NavigationBar/NavigationBar';

const Help: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <S.HelpLayout>
      <S.Header>
        <S.BackButton onClick={handleBackClick} />
        <S.Title>랜덤미팅 도움말</S.Title>
      </S.Header>
      <S.notionContainer>
        <S.notionTitle>노션웹뷰</S.notionTitle>
      </S.notionContainer>
      <NavigationBar />
    </S.HelpLayout>
  );
};

export default Help;
