import React from 'react';
import * as S from './Styles';

const ProfileDetail = ({ label, value }) => {
  const isBlue = label === '이상형' || label === '선호나이';

  return (
    <S.ProfileDetailContainer>
      <S.ProfileDetailBox>
        {isBlue ? <S.BlueCircle /> : <S.PinkCircle />}
        <S.Styles isBlue={isBlue}>{value}</S.Styles>
      </S.ProfileDetailBox>
      <S.InfoTitle>{label}</S.InfoTitle>
    </S.ProfileDetailContainer>
  );
};

export default ProfileDetail;
