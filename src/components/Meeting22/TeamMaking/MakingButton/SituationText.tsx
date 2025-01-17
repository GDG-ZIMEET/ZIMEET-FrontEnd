import React from 'react';

interface SituationTextProps {
  situation: number;
}

const SituationText: React.FC<SituationTextProps> = ({ situation }) => {
  const getSituationText = () => {
    switch (situation) {
      case 1:
        return '친구, 팀명을 입력해야해요.';
      case 2:
        return '팀명을 입력해주세요';
      case 3:
        return '친구를 추가해주세요';
      case 4:
        return '친구를 한명 더 추가해야해요.';
      default:
        return '';
    }
  };

  return <>{getSituationText()}</>;
};

export default SituationText;
