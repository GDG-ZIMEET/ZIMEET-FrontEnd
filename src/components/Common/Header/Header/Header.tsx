import * as S from './Styles';
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
        <S.Title>제목</S.Title>
      </S.BackContainer>
    </S.HeaderLayout>
  );
};

export default Header;
