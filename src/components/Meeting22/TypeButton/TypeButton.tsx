import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { teamSizeState } from '../../../recoil/state/teamSizeState'
import * as S from './Styles';

const TypeButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedButton, setSelectedButton] = useState<string>('2to2');
  const [teamSize, setTeamSize] = useRecoilState(teamSizeState);

  // 클릭 시 색상 변경 및 페이지 이동
  useEffect(() => {
    if (location.pathname === '/meeting22') {
      setSelectedButton('2to2');
      setTeamSize(2); 
    } else if (location.pathname === '/meeting33') {
      setSelectedButton('3to3');
      setTeamSize(3); 
    } else if (location.pathname === '/meeting-random') {
      setSelectedButton('random');
      setTeamSize(0); 
    }
  }, [location.pathname]);


  const handle2Click = () => {
    setSelectedButton('2to2');
    setTeamSize(2); 
    navigate('/meeting22'); 
  };

  const handle3Click = () => {
    setSelectedButton('3to3');
    setTeamSize(3); 
    navigate('/meeting22'); 
  };

  const handleRClick = () => {
    setSelectedButton('random');
    setTeamSize(0); 
    navigate('/meeting-random'); 
  };

  return (
    <S.TypeLayout>
      <S.TypeComponent>
        <S.Twoto2
          onClick={handle2Click}
          selected={selectedButton === '2to2'}
        >
          2대2
        </S.Twoto2>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Threeto3
          onClick={handle3Click}
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
