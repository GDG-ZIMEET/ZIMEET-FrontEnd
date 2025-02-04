import React from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './Styles';
import { boothDetailState } from '../../../recoil/state/boothState';
import { getLogoComponent } from '../../../utils/PosterMap';

const AccountCopy: React.FC = () => {
  const boothDetail = useRecoilValue(boothDetailState);
  const clubId = boothDetail?.data.clubId || '';
  const LogoComponent = getLogoComponent(Number(clubId));

  const handleCopy = async () => {
    if (!boothDetail || !boothDetail.data.account) {
      alert('복사할 계좌번호가 없습니다.');
      return;
    }
    const accountNumber = boothDetail.data.account;
    try {
      await navigator.clipboard.writeText(accountNumber);
      alert('계좌번호가 복사되었습니다.');
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
      alert('클립보드 복사에 실패했습니다.');
    }
  };

  return (
    <S.AccountCopyLayout>
      <S.LogoComponent as={LogoComponent}  />
      <S.Title>{boothDetail?.data.name}</S.Title>
      <S.CopyButton onClick={handleCopy}>계좌번호 복사</S.CopyButton>
    </S.AccountCopyLayout>
  );
}

export default AccountCopy;