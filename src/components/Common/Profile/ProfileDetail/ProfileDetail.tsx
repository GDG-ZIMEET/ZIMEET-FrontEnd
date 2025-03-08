import React from 'react';
import * as S from './Styles';

interface ProfileDetailProps {
  label: string;
  value: string;
  gender?: string;
  ischat?: boolean;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ label, value, gender, ischat }) => {
  const isblue =
    (gender === 'MALE' && (label === 'MBTI' || label === '스타일')) ||
    (gender === 'FEMALE' && (label === '이상형' || label === '선호나이'));


  return (
    <S.ProfileDetailContainer $ischat={ischat}>
      <S.ProfileDetailBox>
        <S.Styles $isblue={isblue}>{value}</S.Styles>
      </S.ProfileDetailBox>
      <S.InfoTitle $ischat={ischat}>{label}</S.InfoTitle>
    </S.ProfileDetailContainer>
  );
};

export default ProfileDetail;
