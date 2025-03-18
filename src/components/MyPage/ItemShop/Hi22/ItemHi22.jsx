import * as S from './Styles';

const ItemHi22 = () => {
  return (
        <S.ItemHi22Container>
            <S.Title>2대2 하이</S.Title>
            <S.HiContainer>
                <S.HiWrpper>
                        <S.HiQuantity>
                            <S.HiQuantityText>1개</S.HiQuantityText>
                            <S.Hi1 />
                        </S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>1,000원</S.OriginPrice>
                            <S.DiscountPrice>0원</S.DiscountPrice>
                        </S.HiPrice>
                </S.HiWrpper>
                <S.HiWrpper>
                        <S.HiQuantity>
                            <S.HiQuantityText>3개</S.HiQuantityText>
                            <S.Hi3 />
                        </S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>3,000원</S.OriginPrice>
                            <S.DiscountPrice>0원</S.DiscountPrice>
                        </S.HiPrice>
                </S.HiWrpper>
                <S.HiWrpper>
                        <S.HiQuantity>
                            <S.HiQuantityText>10개</S.HiQuantityText>
                            <S.Hi10 />
                        </S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>10,000원</S.OriginPrice>
                            <S.DiscountPrice>0원</S.DiscountPrice>
                        </S.HiPrice>
                </S.HiWrpper>
            </S.HiContainer>
        </S.ItemHi22Container>
  );
};

export default ItemHi22;