import React from 'react';
import * as S from './Styles';

interface ProfileDetailProps {
  label: string;
  value: string;
  gender?: string;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ label, value, gender }) => {
  const isblue =
    (gender === 'MALE' && (label === 'MBTI' || label === '스타일')) ||
    (gender === 'FEMALE' && (label === '이상형' || label === '선호나이'));


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
