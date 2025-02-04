import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { getBoothColor, getTextColor } from './boothsData';
import { Club } from '../../../recoil/type/booth';

interface BoothProps {
  booth: Club;
}

const Booth: React.FC<BoothProps> = ({ booth }) => {
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLongPress, setIsLongPress] = useState(false); //길게 눌렀나 추적적
  const navigate = useNavigate();


  const handleBoothPressStart = () => {
    const timer = setTimeout(() => {
      handleBoothClick();       //0.8초 누르면 계좌번호 복사
      setIsLongPress(true);     //길게 눌렀다고 표시
    }, 800);
    setPressTimer(timer);
  };

  const handleBoothPressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
      if (!isLongPress) {
        navigate(`/boothDetail/${booth.clubId}`);
      }
      setIsLongPress(false);
    }
  };

  //https 환경에서만 클립보드 사용 가능
  const handleBoothClick = async () => {
    try {
      if (!booth.account) {
        alert('복사할 계좌번호가 없습니다.');
        return;
      }
      await navigator.clipboard.writeText(booth.account);
      alert('계좌번호가 복사되었습니다.');
    } catch (error) {
      alert('복사에 실패했습니다.');
      console.error('Error copying text:', error);
    }
  };
  

  return (
    <S.Booth
      color={getBoothColor(booth.category)}
      onMouseDown={handleBoothPressStart}
      onMouseUp={handleBoothPressEnd}
      onMouseLeave={handleBoothPressEnd}
      onTouchStart={handleBoothPressStart}
      onTouchEnd={handleBoothPressEnd}
      style={{ userSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none' }}
    >
      <S.BoothWho color={getTextColor(booth.category)}>{booth.name}</S.BoothWho>
      <S.BoothTitle>{booth.rep}</S.BoothTitle>
    </S.Booth>
  );
};

export default Booth;
