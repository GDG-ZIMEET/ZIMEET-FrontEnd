import * as S from './Styles';
import ZimeetLogo from '../../../../assets/icon/TeamInfo/ZimeetLogo.svg'; 

const TipModal = () => {
  return (
    <S.TipLayOut>
        <S.TipImageStyled src={ZimeetLogo} alt="Zimeet Logo" />
        <S.TipWrapper>
          <S.TipText1>
            하이 많이 받는 Tip
            <span>자세히 <S.WhiteGoIcon/></span>
          </S.TipText1>
          <S.TipText2>GDGoC CUK 부스에서 인증하고 마크 받기</S.TipText2>
        </S.TipWrapper>
    </S.TipLayOut>
  );
};

export default TipModal;
