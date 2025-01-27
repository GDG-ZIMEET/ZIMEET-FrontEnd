import { useState } from 'react';
import * as S from './Styles'; // 필요한 스타일 임포트

const ModifyNickname = ({ isOpen, onClose }) => {
  const [nickname, setNickname] = useState('');
  const isFormComplete = nickname;
  
  const handleSave = () => {
    console.log('저장된 닉네임:', nickname);
    onClose();
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
          onChange={(e) => setNickname(e.target.value)} 
          placeholder="새 닉네임 입력" 
        />

        <S.BtnContainer>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.SaveBtn disabled={!isFormComplete} onClick={handleSave}>저장하기</S.SaveBtn>          
        </S.BtnContainer>

      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default ModifyNickname;
