import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import * as I from '../../../assets/Icons';
import useLogin from 'api/Authentication/useLogin';

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useLogin();
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoin = () => {
    navigate('/join');
  };

  return (
    <S.LoginContainer>
      <S.LogoContainer>
        <S.Logo>
          <I.ZimeetLogo />
        </S.Logo>
        <S.LogoText>지금 우리 만나요, ZI밋에서!</S.LogoText>
      </S.LogoContainer>
      <S.LoginForm>
        <S.LoginInput
          type="text"
          placeholder="학번"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
        />
        <S.LoginInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.LoginBtn
          onClick={(e) => {
            e.preventDefault();
            handleLogin({ studentNumber, password, setErrorMessage, navigate });
          }}
        >
          로그인
        </S.LoginBtn>
        {errorMessage && <S.ErrorMsg>{errorMessage}</S.ErrorMsg>}
      </S.LoginForm>
      <S.JoinContainer>
        <S.JoinText>ZI밋, 처음인가요?</S.JoinText>
        <S.JoinBtn onClick={handleJoin}>회원가입</S.JoinBtn>
      </S.JoinContainer>
      <S.BottomLogoContainer>
        <I.GdgBottomLogo />
      </S.BottomLogoContainer>
    </S.LoginContainer>
  );
};

export default Login;