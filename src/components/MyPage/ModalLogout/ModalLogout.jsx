import useLogout from '../../../api/Authentication/useLogout';
import * as S from "./Styles"; 

const ModalLogout = ({ isOpen, onClose }) => {
  const handleLogout = useLogout();

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.BoldText>로그아웃 하시겠어요?</S.BoldText>
        <S.Text>아래 버튼을 한 번 더 눌러</S.Text>
        <S.Text>로그아웃을 진행해주세요.</S.Text>
        <S.BtnContainer>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.SaveBtn onClick={handleLogout}>로그아웃</S.SaveBtn>          
        </S.BtnContainer>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default ModalLogout;
