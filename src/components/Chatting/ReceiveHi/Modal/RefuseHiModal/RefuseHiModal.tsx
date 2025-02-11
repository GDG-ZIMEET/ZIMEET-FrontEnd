import React, {useState} from "react";
import * as S from './Styles';

interface RefuseHiProps {
    onClose: () => void;
    onConfirm: () => void;
    teamName: string;
}

const RefuseHiModal: React.FC<RefuseHiProps> = ({ teamName, onClose, onConfirm }) => {
    const [showAcceptHi, setShowAcceptHi] = useState<boolean>(true);

    const handleRefuse = () => {
        setShowAcceptHi(false);
        onConfirm();
    };

    const handleClose = () => {
        setShowAcceptHi(false);
        onClose();
    };

    return(
        <>
            {showAcceptHi && (
                <S.ModalLayout>
                    <S.ModalContent>
                        <S.ModalTitle>{teamName} 팀의 하이를 거절할까요?</S.ModalTitle>
                        <S.ModalText>
                            '{teamName}' 팀이 보낸 하이를 거절하면<br/>
                            이 팀에게는 다시 하이를 받을 수 없고<br/>
                            한 번 거절한 기록은 취소되지 않아요. 🥲<br/>
                            하이를 거절했다는 알림은 보내지지 않아요.
                        </S.ModalText>
                        <S.ButtonBox>
                            <S.CancelButton onClick={handleClose}>
                                <S.Text>취소하기</S.Text>
                            </S.CancelButton>
                            <S.RefuseButton onClick={handleRefuse}>거절</S.RefuseButton>
                        </S.ButtonBox>
                    </S.ModalContent>
                </S.ModalLayout>
            )}
        </>
    );
};

export default RefuseHiModal;