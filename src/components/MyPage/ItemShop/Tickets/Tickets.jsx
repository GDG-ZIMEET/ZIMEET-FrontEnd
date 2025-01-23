import * as S from './Styles';

const Tickets = () => {
  return (
        <S.TicketsContainer>
            <S.Title>티켓</S.Title>
            <S.HiContainer>
                <S.HiWrpper>
                    <S.HiWrpper>
                        <S.HiQuantity>1개</S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>1,500원</S.OriginPrice>
                            <S.DiscountPrice>500원</S.DiscountPrice>
                        </S.HiPrice>
                    </S.HiWrpper>
                </S.HiWrpper>
                <S.HiWrpper>
                    <S.HiWrpper>
                        <S.HiQuantity>3개</S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>4,500원</S.OriginPrice>
                            <S.DiscountPrice>1,200원</S.DiscountPrice>
                        </S.HiPrice>
                    </S.HiWrpper>
                </S.HiWrpper>
                <S.HiWrpper>
                    <S.HiWrpper>
                        <S.HiQuantity>8개</S.HiQuantity>
                        <S.HiPrice>
                            <S.OriginPrice>12,000원</S.OriginPrice>
                            <S.DiscountPrice>3,000원</S.DiscountPrice>
                        </S.HiPrice>
                    </S.HiWrpper>
                </S.HiWrpper>
            </S.HiContainer>
        </S.TicketsContainer>
  );
};

export default Tickets;