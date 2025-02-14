import * as S from './Styles';

interface LogoProps {
  title: string;
  text: string;
}

export const LogoContainer: React.FC<LogoProps> = ({ title, text }) => (
  <S.LogoContainer>
    <S.ZimeetLogo />
    <S.LogoTitle>{title}</S.LogoTitle>
    <S.LogoText>{text}</S.LogoText>
  </S.LogoContainer>
);