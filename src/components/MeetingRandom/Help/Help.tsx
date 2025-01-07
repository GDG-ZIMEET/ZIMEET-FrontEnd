import React from 'react';
import * as S from './Styles';

interface HelpProps {
  showContainer: boolean;
  onClick: () => void;
}

const Help: React.FC<HelpProps> = ({ showContainer, onClick }) => {
  return (
    <S.HelpLayout>
      {showContainer && <S.HelpContainer show={showContainer} onClick={onClick}>🗨️도움말</S.HelpContainer>}
    </S.HelpLayout> 
  );
};

export default Help;
