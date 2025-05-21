import React from 'react';
import { DetailButton, DetailLayOut, TextBox } from './Styles';

const Detail = () => {
  const handleClick = async (price: number) => {
    const accountNum = '100034291903';
    const bankName = '토스뱅크';
    const accountOwner = '장세연';
    const amount = price;
    try {
      const clipboardText = `계좌: ${bankName} ${accountNum} (${accountOwner})`;
      await navigator.clipboard.writeText(clipboardText);
      const link = `supertoss://send?recipientName=${encodeURIComponent('조은정')}&recipient=01012345678&amount=${amount}&message=${encodeURIComponent('ZI밋 시즌권')}`;
      window.location.href = link;
    } catch (err) {
      alert('계좌번호 복사에 실패했습니다.');
    }
  };

  return (
    <DetailLayOut onClick={() => handleClick(2500)}>
      <TextBox>직전하기A+ 팀 마음 공략법이 궁금하다면!</TextBox>
      <DetailButton>2,500원으로 모든 팀의 상세 정보 확인하기</DetailButton>
    </DetailLayOut>
  );
};

export default Detail;
