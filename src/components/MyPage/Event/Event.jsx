
import * as S from './Styles'; 
import * as I from '../../../assets/Icons';

const Event = () => {
  return (
    <S.EventContainer>
      <S.EventLogo>
        <I.ZimeetLogo />
      </S.EventLogo>
      <S.EventCommentWrapper>
        <S.EventTitle>늘품제 EVENT</S.EventTitle>
        <S.EventText>
          후기 입력하고, <S.EventTextBold>무료 하이, 무료 티켓</S.EventTextBold> 받자!
        </S.EventText>
      </S.EventCommentWrapper>
      <S.MoveBtn>&gt;</S.MoveBtn>
    </S.EventContainer>
  );
};

export default Event;
