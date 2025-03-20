import { useState } from 'react';
import * as S from './Styles';
import { checkDuplicateNickname } from 'api/Authentication/checkDuplicateNickname';

const ModifyNickname = ({ isOpen, onClose, onUpdateNickname }) => {
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const isFormComplete = nickname && isNicknameValid;

  const handleUpdateNickname = async (e) => {
    const value = e.target.value;
    setNickname(value);
    setIsNicknameValid(value.length >= 2 && value.length <= 7 );
  };

  const handleSave = async () => {
    if (isFormComplete) {
      const isUnique = await checkDuplicateNickname(nickname, setNicknameError);
      onUpdateNickname(nickname);
      if (isUnique) {
        onClose();
      }
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
        {nicknameError && <S.ErrorMessage>{nicknameError}</S.ErrorMessage>}
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