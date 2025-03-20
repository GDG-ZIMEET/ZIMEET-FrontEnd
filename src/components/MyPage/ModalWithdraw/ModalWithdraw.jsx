import { useState } from "react";
import * as S from "./Styles";
import useWithdraw from "api/Authentication/useWithdraw";
import { track } from '@amplitude/analytics-browser';

const ModalWithdraw = ({ isOpen, onClose }) => {
  const [withdrawText, setWithdrawText] = useState("");
  const [isTextValid, setIsTextValid] = useState(false);
  const isFormComplete = isTextValid;
  const handleWithdraw = useWithdraw(); 

  const checkWithdrawComment = (e) => {
    const value = e.target.value;
    setWithdrawText(value);
    setIsTextValid(value === "ZI밋 아쉽지만 탈퇴할게요");
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.BoldText>ZI밋에서 탈퇴하시겠어요?</S.BoldText>
        <S.Text>
          회원탈퇴를 할 경우,{" "}
          <S.BoldUnderlineText>내 기록들이 모두 사라져요.</S.BoldUnderlineText>
        </S.Text>
        <S.Text>이미 결제된 아이템의 경우 환불할 수 없어요.</S.Text>
        <S.Text>그래도 회원탈퇴를 원할 경우, 아래 텍스트를 입력해주세요.</S.Text>
        <S.MNInput
          type="text"
          value={withdrawText}
          onChange={checkWithdrawComment}
          placeholder="ZI밋 아쉽지만 탈퇴할게요 를 입력해주세요."
        />
        <S.BtnContainer>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.SaveBtn disabled={!isFormComplete} onClick={handleWithdraw}>
            탈퇴하기
          </S.SaveBtn>
        </S.BtnContainer>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default ModalWithdraw;
