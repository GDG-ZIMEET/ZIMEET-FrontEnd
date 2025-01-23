import * as S from './Styles';

const QnA = () => {
  return (
        <S.QnAContainer>
            <S.Title>문의하기</S.Title>
            <S.QnAs>
                <S.QnAContent>1대1 문의하기</S.QnAContent>
                <S.MoveBtn>&gt;</S.MoveBtn>
            </S.QnAs>
            <S.QnAs>
                <S.QnAContent>자주 묻는 질문</S.QnAContent>
                <S.MoveBtn>&gt;</S.MoveBtn>
            </S.QnAs>
            <S.QnAs>
                <S.QnAContent>알림 설정하는 법</S.QnAContent>
                <S.MoveBtn>&gt;</S.MoveBtn>
            </S.QnAs>
            <S.QnAs>
                <S.QnAContent>미팅 잘하는 법</S.QnAContent>
                <S.MoveBtn>&gt;</S.MoveBtn>
            </S.QnAs>
            <S.QnAs>
                <S.QnAContent>랜덤미팅 참여 방법</S.QnAContent>
                <S.MoveBtn>&gt;</S.MoveBtn>
            </S.QnAs>
            <S.QnAs>
                <S.QnAContent>ZI밋 개발팀 소개</S.QnAContent>
                <S.MoveBtn>&gt;</S.MoveBtn>
            </S.QnAs>
        </S.QnAContainer>
  );
};

export default QnA;