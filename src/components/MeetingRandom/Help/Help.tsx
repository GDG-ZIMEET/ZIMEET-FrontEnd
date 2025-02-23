import React from 'react';
import * as S from './Styles';


interface HelpProps {
  isRandomLoading: boolean;
  onClick: () => void;
}

const Help: React.FC<HelpProps> = ({ isRandomLoading, onClick }) => {
  return (
    <S.HelpLayout>
      {isRandomLoading && <S.HelpContainer onClick={onClick}>
        <S.HelpIcon />
        도움말
        </S.HelpContainer>}
    </S.HelpLayout> 
  );
};

export default Help;
