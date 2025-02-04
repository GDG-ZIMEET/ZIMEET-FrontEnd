
import { TipLayOut, TipText1, TipText2, TipImageStyled, TipWrapper } from './Styles'; // TipTitle과 TipText 스타일을 정의한 것으로 가정
import ZimeetLogo from '../../../../assets/icon/TeamInfo/ZimeetLogo.svg'; // ZimeetLogo 이미지 경로

const TipModal = () => {
  return (
    <TipLayOut>
        <TipImageStyled src={ZimeetLogo} alt="Zimeet Logo" />
        <TipWrapper>
          <TipText1>하이 많이 받는 Tip</TipText1>
          <TipText2>GDGoC CUK 부스에서 인증하고 마크 받기</TipText2>
        </TipWrapper>
    </TipLayOut>
  );
};

export default TipModal;
