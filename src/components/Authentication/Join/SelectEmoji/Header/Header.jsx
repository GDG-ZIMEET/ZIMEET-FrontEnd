import * as S from '../../../../Common/Header/Header/Styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <S.HeaderLayout>
      <S.BackContainer>
        <S.BackButton onClick={handleBackClick} />
        <S.Title>이모지 선택하기</S.Title>
      </S.BackContainer>
    </S.HeaderLayout>
  );
};

export default Header;
