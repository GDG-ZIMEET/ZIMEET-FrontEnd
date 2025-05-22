import React from 'react';
import * as S from './Styles';

interface HelpProps {
  onClick: () => void;
}

const Help: React.FC<HelpProps> = ({ onClick }) => {
  return (
    <S.HelpLayout>
      <S.HelpContainer onClick={onClick}>
        <S.HelpIcon />
        도움말
      </S.HelpContainer>
    </S.HelpLayout>
  );
};

export default Help;
