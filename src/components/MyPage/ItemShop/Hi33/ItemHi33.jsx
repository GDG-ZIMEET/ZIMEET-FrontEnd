import * as S from './Styles';

const ItemHi33 = () => {
  return (
        <S.ItemHi33Container>
            <S.Title>3대3 하이</S.Title>
            <S.HiContainer>
                <S.HiWrpper>
                    <S.HiWrpper>
                        <S.HiQuantity>1개</S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>1,000원</S.OriginPrice>
                            <S.DiscountPrice>400원</S.DiscountPrice>
                        </S.HiPrice>
                    </S.HiWrpper>
                </S.HiWrpper>
                <S.HiWrpper>
                    <S.HiWrpper>
                        <S.HiQuantity>3개</S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>3,000원</S.OriginPrice>
                            <S.DiscountPrice>1,000원</S.DiscountPrice>
                        </S.HiPrice>
                    </S.HiWrpper>
                </S.HiWrpper>
                <S.HiWrpper>
                    <S.HiWrpper>
                        <S.HiQuantity>10개</S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>10,000원</S.OriginPrice>
                            <S.DiscountPrice>3,000원</S.DiscountPrice>
                        </S.HiPrice>
                    </S.HiWrpper>
                </S.HiWrpper>
            </S.HiContainer>
        </S.ItemHi33Container>
  );
};

export default ItemHi33;