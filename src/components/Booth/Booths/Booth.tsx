import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { getBoothColor, getTextColor } from './boothsData';

interface BoothProps {
  booth: {
    who: string;
    title: string;
    category: string;
    accountNumber: string;
  };
}

const Booth: React.FC<BoothProps> = ({ booth }) => {
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [isLongPress, setIsLongPress] = useState(false);
  const navigate = useNavigate();

  const handleBoothPressStart = () => {
    const timer = setTimeout(() => {
      handleBoothClick();
      setIsLongPress(true);
    }, 800);
    setPressTimer(timer);
  };

  const handleBoothPressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
      if (!isLongPress && booth.who === 'GDGoC') {
        navigate('/boothDetail');
      }
      setIsLongPress(false);
    }
  };

  const handleBoothClick = () => {
    const textarea = document.createElement('textarea');
    textarea.value = booth.accountNumber;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('계좌번호가 복사되었습니다.');
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
      <S.BoothWho color={getTextColor(booth.category)}>{booth.who}</S.BoothWho>
      <S.BoothTitle>{booth.title}</S.BoothTitle>
    </S.Booth>
  );
};

export default Booth;
