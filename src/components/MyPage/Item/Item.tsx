
import * as S from './Styles'; 
import * as I from '../../../assets/Icons';

const Item = () => {
  return (
    <S.IteamLayout>
        <S.BannerTitle>
            <b>ZI밋+ 등급 | 늘품제 시즌권</b><br/>
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
