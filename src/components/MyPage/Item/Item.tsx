import * as S from './Styles';

const Item = () => {
  // const handleClick = async () => {
  //   const accountNum = '100034291903';
  //   const bankName = '토스뱅크';
  //   const accountOwner = '장세연';
  //   const amount = 1900;
  //   try {
  //     const clipboardText = `계좌: ${bankName} ${accountNum} (${accountOwner})`;
  //     await navigator.clipboard.writeText(clipboardText);
  //     const link = `supertoss://send?recipientName=${encodeURIComponent('조은정')}&recipient=01012345678&amount=${amount}&message=${encodeURIComponent('ZI밋 시즌권')}`;
  //     window.location.href = link;
  //   } catch (err) {
  //     alert('계좌번호 복사에 실패했습니다.');
  //   }
  // };

  return (
    <S.IteamLayout>
      <S.BannerTitle>
        <b>ZI밋+ 등급 | 아우름제 시즌권</b>
        <br />
        모든 팀의 상세 정보를 3주 동안 무제한 확인 가능
      </S.BannerTitle>
      <S.BannerPriceWrapper>
        <S.OriginPrice>9,000원</S.OriginPrice>
        <S.DiscountPrice>1,900원</S.DiscountPrice>
      </S.BannerPriceWrapper>
    </S.IteamLayout>
  );
};

export default Item;
