
import * as S from './Styles'; 

const ItemBanner = ({ userInfo }) => {
  const isLoggedIn = !!userInfo?.data;

  return (
    <S.BannerContainer isLoggedIn={isLoggedIn}>
      <S.BannerCommentWrapper>
        <S.BannerTitle>ZI밋+ 등급 | 늘품제 시즌권</S.BannerTitle>
        <S.BannerText>모든 팀의 상세 정보를 3주 동안 무제한 확인 가능</S.BannerText>
      </S.BannerCommentWrapper>
      <S.BannerPriceWrapper>
        <S.OriginPrice>9,000원</S.OriginPrice>
        <S.DiscountPrice>1,900원</S.DiscountPrice>
      </S.BannerPriceWrapper>
    </S.BannerContainer>
  );
};

export default ItemBanner;
