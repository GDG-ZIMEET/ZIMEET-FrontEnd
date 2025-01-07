import React from 'react';
import * as S from './Styles';

const AccountCopy: React.FC = () => {
  {/*나중에 navigator.clipboard로 변경*/}
  const handleCopy = () => {
    const accountNumber = '3333-17-6207512'; 
    const textarea = document.createElement('textarea');
    textarea.value = accountNumber;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('계좌번호가 복사되었습니다.');
  };

  return (
    <S.AccountCopyLayout>
      <S.CircleLogo />
      <S.Title>GDG on Campus CUK</S.Title>
      <S.CopyButton onClick={handleCopy}>계좌번호 복사</S.CopyButton>
    </S.AccountCopyLayout>
  );
}

export default AccountCopy;