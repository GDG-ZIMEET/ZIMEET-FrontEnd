import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Styles';

interface TypeButtonProps {
  setSelectedTeamType: (teamType: string) => void;
}

const TypeButton: React.FC<TypeButtonProps> = ({  setSelectedTeamType }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState<string>('2to2');

  
  useEffect(() => {
    if (location.pathname === '/meeting22') {
      setSelectedButton('2to2');
    } else if (location.pathname === '/meeting33') {
      setSelectedButton('3to3');
    } else if (location.pathname === '/meeting-random') {
      setSelectedButton('random');
    }
  }, [location.pathname]);


  const handleTypeChange = (teamType: string, button: string, size: number) => {
    setSelectedButton(button);
    setSelectedTeamType(teamType); 
  };

  const handleRClick = () => {
    setSelectedButton('random');
    setSelectedTeamType('');
    navigate('/meeting-random'); 
  };

  return (
    <S.TypeLayout>
      <S.TypeComponent>
        <S.Twoto2
          onClick={() => handleTypeChange('TWO_TO_TWO', '2to2', 2)}
          selected={selectedButton === '2to2'}
        >
          2대2
        </S.Twoto2>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Threeto3
          onClick={() => handleTypeChange('THREE_TO_THREE', '3to3', 3)}
          selected={selectedButton === '3to3'}
        >
          3대3
        </S.Threeto3>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Random
          onClick={handleRClick}
          selected={selectedButton === 'random'}
        >
          랜덤
        </S.Random>
      </S.TypeComponent>
      <S.lookComponent>
        {location.pathname !== '/meeting-random' && (
          <S.lookword>이성 팀만 보여요👀</S.lookword>
        )}
      </S.lookComponent>
    </S.TypeLayout>
  );
};

export default TypeButton;
