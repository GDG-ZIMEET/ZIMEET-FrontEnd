import React from 'react';
import * as S from './Styles';

interface ProfileDetailProps {
  label: string;
  value: string;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ label, value }) => {
  const isblue = label === '이상형' || label === '선호나이'? 'true' : 'false';

  return (
    <S.ProfileDetailContainer>
      <S.ProfileDetailBox>
        <S.Styles $isblue={isblue}>{value}</S.Styles>
      </S.ProfileDetailBox>
      <S.InfoTitle>{label}</S.InfoTitle>
    </S.ProfileDetailContainer>
  );
};

export default ProfileDetail;
