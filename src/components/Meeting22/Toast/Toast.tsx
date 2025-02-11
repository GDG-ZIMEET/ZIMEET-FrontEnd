import React, { useEffect } from 'react';
import * as S from './Styles';

interface ToastProps {
    isOpen: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
          const timer = setTimeout(() => {
            onClose();
          }, 1000); 
          return () => clearTimeout(timer); 
        }
      }, [isOpen]);

    if (!isOpen) return null;

    return (
        <S.ToastLayOut>
          <S.ToastText>다른 팀을 보려면 팀을 만들어주세요!</S.ToastText>
        </S.ToastLayOut>
    );
};

export default Toast;