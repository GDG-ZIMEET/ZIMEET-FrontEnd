import * as S from '../Hi22/Styles';

const Tickets = () => {
  return (
        <S.TicketsContainer>
            <S.Title>티켓</S.Title>
            <S.HiContainer>
                <S.HiWrpper>
                    <S.HiQuantity>
                            <S.HiQuantityText>1개</S.HiQuantityText>
                            <S.T1/>
                    </S.HiQuantity>
                    <S.HiPrice>
                        <S.OriginPrice>1,500원</S.OriginPrice>
                        <S.DiscountPrice>0원</S.DiscountPrice>
                    </S.HiPrice>
                </S.HiWrpper>
                <S.HiWrpper>
                    <S.HiQuantity>
                        <S.HiQuantityText>3개</S.HiQuantityText>
                        <S.T3/>
                    </S.HiQuantity>
                    <S.HiPrice>
                        <S.OriginPrice>4,500원</S.OriginPrice>
                        <S.DiscountPrice>0원</S.DiscountPrice>
                    </S.HiPrice>
                </S.HiWrpper>
                <S.HiWrpper>
                    <S.HiQuantity>
                        <S.HiQuantityText>8개</S.HiQuantityText>
                        <S.T8/>
                    </S.HiQuantity>
                    <S.HiPrice>
                        <S.OriginPrice>12,000원</S.OriginPrice>
                        <S.DiscountPrice>0원</S.DiscountPrice>
                    </S.HiPrice>
                </S.HiWrpper>
            </S.HiContainer>
        </S.TicketsContainer>
  );
};

export default Tickets;