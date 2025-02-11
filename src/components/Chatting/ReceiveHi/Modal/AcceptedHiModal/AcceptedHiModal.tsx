import React from 'react';
import * as S from './Styles';

interface AcceptedHiModalProps {
    onClose: () => void;
}

const AcceptedHiModal: React.FC<AcceptedHiModalProps> = ({ onClose }) => {
    return (
        <S.ModalLayout>
            <S.ModalContent>
                <S.ModalTitle>하이를 수락했어요!</S.ModalTitle>
                <S.ModalText>
                    바로 채팅이 열렸으니 미팅을 즐겨보세요! :)<br/>
                    알림을 위해 꼭 <S.HighlightText>ZI밋을 홈화면에 추가</S.HighlightText>해주세요!
                </S.ModalText>
                <S.CancelButton onClick={onClose}>닫기</S.CancelButton>
            </S.ModalContent>
        </S.ModalLayout>
    );
};

export default AcceptedHiModal;