import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './Styles';
import { track } from '@amplitude/analytics-browser';

type TeamType = 'ONE_TO_ONE' | 'TWO_TO_TWO' | 'Random';

interface TypeButtonProps {
  selectedTeamType: TeamType;
  setSelectedTeamType: (teamType: TeamType) => void;
}

const TypeButton: React.FC<TypeButtonProps> = ({ selectedTeamType, setSelectedTeamType }) => {
  const location = useLocation();

  const selectedButton = useMemo(() => {
    if (selectedTeamType === 'TWO_TO_TWO') return '2to2';
    if (selectedTeamType === 'Random') return 'random';
    return '1to1';
  }, [selectedTeamType]);

  useEffect(() => {
    if (selectedTeamType === 'TWO_TO_TWO') track('[접속]미팅_2대2');
    else if (selectedTeamType === 'Random') track('[접속]미팅_랜덤');
    else track('[접속]미팅_1대1');
  }, [selectedTeamType]);

  const handleTypeChange = (next: TeamType, clickTag: string, visitTag: string) => {
    setSelectedTeamType(next);
    track(clickTag);
    track(visitTag);
  };

  const handleRandomClick = () => {
    setSelectedTeamType('Random');
    track('[클릭]미팅_헤더_랜덤버튼');
    track('[접속]미팅_랜덤');
  };

  return (
    <S.TypeLayout>
      <S.TypeComponent>
        <S.Oneto1
          onClick={() =>
            handleTypeChange('ONE_TO_ONE', '[클릭]미팅_헤더_1대1버튼', '[접속]미팅_1대1')
          }
          selected={selectedButton === '1to1'}
        >
          1대1
        </S.Oneto1>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Twoto2
          onClick={() =>
            handleTypeChange('TWO_TO_TWO', '[클릭]미팅_헤더_2대2버튼', '[접속]미팅_2대2')
          }
          selected={selectedButton === '2to2'}
        >
          2대2
        </S.Twoto2>
      </S.TypeComponent>
      <S.TypeComponent>
        <S.Random onClick={handleRandomClick} selected={selectedButton === 'random'}>
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
