import React from 'react';
import * as S from './Styles';

interface HelpProps {
  showContainer: boolean;
}

const Help: React.FC<HelpProps> = ({ showContainer }) => {
  return (
    <S.HelpLayout>
      {showContainer && <S.HelpContainer show={showContainer}>🗨️도움말</S.HelpContainer>}
    </S.HelpLayout> 
  );
};

export default Help;
