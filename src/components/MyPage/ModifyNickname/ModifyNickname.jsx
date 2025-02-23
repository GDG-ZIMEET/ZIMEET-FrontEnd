import { useState } from 'react';
import * as S from './Styles'; 
import { updateNickname } from 'api/Mypage/UpdateNickname';

const ModifyNickname = ({ isOpen, onClose }) => {
  const [nickname, setNickname] = useState('');
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const isFormComplete = nickname && isNicknameValid;
  
  const handleUpdateNickname = (e) => {
    const value = e.target.value;
    setNickname(value);
    setIsNicknameValid(value.length >= 2 && value.length <= 7);
  };
  

  const handleSave = async () => {
    try {
      const response = await updateNickname({ nickname });
      if (response) {
        alert('닉네임이 성공적으로 업데이트되었습니다.');
        onClose();
        window.location.reload();
      } else {
        alert('닉네임 업데이트에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('서버 오류가 발생했습니다.');
    }
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.BoldText>변경할 닉네임을 입력해주세요.</S.BoldText>
        <S.Text>닉네임은 띄어쓰기 포함 7글자까지 가능해요.</S.Text>
        <S.MNInput 
          type="text" 
          value={nickname} 
          onChange={handleUpdateNickname} 
          placeholder="나를 표현할 닉네임을 입력해주세요." 
        />
        {!isNicknameValid && <S.ErrorMessage>2글자 이상 7글자 이하로 작성해주세요.</S.ErrorMessage>}
        <S.BtnContainer>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.SaveBtn disabled={!isFormComplete} onClick={handleSave}>저장하기</S.SaveBtn>          
        </S.BtnContainer>

      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default ModifyNickname;
