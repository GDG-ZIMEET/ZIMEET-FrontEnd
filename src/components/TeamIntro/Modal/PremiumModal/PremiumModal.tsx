import React from 'react';
import * as S from './Styles';
import HeartMail from '../../../../assets/icon/TeamInfo/HeartMail.svg'

interface PremiumModalProps {
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ onClose, ...props }) => {
  return (
      <S.ModalContainer>
        <img src={HeartMail} alt="하트메일" className="mail" />
        <span className="highlight">ZI밋+</span> 에게만 공개되는 자세한 정보와 이상형
      </S.ModalContainer>
  );
};

export default PremiumModal;
