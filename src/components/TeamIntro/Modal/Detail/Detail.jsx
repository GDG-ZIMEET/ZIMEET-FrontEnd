import React from 'react';
import { DetailButton, DetailLayOut,TextBox } from './Styles';

const Detail = () => {
  return (
    <DetailLayOut>
      <TextBox>직전하기A+ 팀 마음 공략법이 궁금하다면!</TextBox>
      <DetailButton>1,900원으로 모든 팀의 상세 정보 확인하기</DetailButton>
    </DetailLayOut>
  );
};

export default Detail;
