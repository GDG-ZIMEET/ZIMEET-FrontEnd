import * as S from '../Hi22/Styles';

const ItemHi33 = () => {
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
    <S.ItemHi22Container>
      <S.Title>1대1 하이</S.Title>
      <S.HiContainer>
        <S.HiWrpper onClick={() => handleClick(300)}>
          <S.HiQuantity>
            <S.HiQuantityText>1개</S.HiQuantityText>
            <S.Hi1 />
          </S.HiQuantity>
          <S.HiPrice>
            <S.OriginPrice>1,000원</S.OriginPrice>
            <S.DiscountPrice>300원</S.DiscountPrice>
          </S.HiPrice>
        </S.HiWrpper>
        <S.HiWrpper onClick={() => handleClick(800)}>
          <S.HiQuantity>
            <S.HiQuantityText>3개</S.HiQuantityText>
            <S.Hi3 />
          </S.HiQuantity>
          <S.HiPrice>
            <S.OriginPrice>3,000원</S.OriginPrice>
            <S.DiscountPrice>800원</S.DiscountPrice>
          </S.HiPrice>
        </S.HiWrpper>
        <S.HiWrpper onClick={() => handleClick(2500)}>
          <S.HiQuantity>
            <S.HiQuantityText>10개</S.HiQuantityText>
            <S.Hi10 />
          </S.HiQuantity>
          <S.HiPrice>
            <S.OriginPrice>10,000원</S.OriginPrice>
            <S.DiscountPrice>2,500원</S.DiscountPrice>
          </S.HiPrice>
        </S.HiWrpper>
      </S.HiContainer>
    </S.ItemHi22Container>
  );
};

export default ItemHi33;
