import React from 'react';
import * as S from './Styles';

const PeoplePlusButton: React.FC = () => {
  return (
    <S.PeoplePlusButtonLayout>
      <S.Title>팀원</S.Title>
      <S.Description>닉네임이나 전화번호로 검색할 수 있어요.</S.Description>
      <S.PlusTeamBox>팀원 추가하기</S.PlusTeamBox>
    </S.PeoplePlusButtonLayout>
  );
};

export default PeoplePlusButton;