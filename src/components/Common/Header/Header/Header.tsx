import * as S from './Styles';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === '/modifyprofile') {
      navigate('/mypage');
    } else {
      navigate(-1);
    }
  };

  return (
    <S.HeaderLayout>
      <S.BackContainer>
        <S.BackButton onClick={handleBackClick} />
        <S.Title>{title}</S.Title>
      </S.BackContainer>
    </S.HeaderLayout>
  );
};

export default Header;
