import { useState } from 'react';
import axios from 'axios';
import * as S from './Styles';
import * as I from '../../../assets/Icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  

  const handleJoin = () => {
    navigate('/join'); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); 

    try {
      const response = await axios.post(`/jwt/login`, {
        studentNumber,
        password,
      });

      const { accessToken, refreshToken } = response.data.data;

      localStorage.setItem('token', accessToken);
      localStorage.setItem('tokenExpiration', refreshToken);

      // console.log("로그인 성공:", accessToken); 
      // alert("로그인 성공");

      navigate('/meeting22');
    } catch (error) {
      const errorMessage = error.response?.data?.message || '로그인 실패';
      setErrorMessage(errorMessage); 

      if (error.response) {
        console.error('Error Code:', error.response.status);
        console.error('Error Message:', error.response.data.message);
      } else {
        console.error('Error:', error.message);
      }
    }
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
        <S.LoginBtn onClick={handleLogin}>로그인</S.LoginBtn>
        {errorMessage && <S.ErrorMsg>입력하신 정보가 잘못되었습니다.</S.ErrorMsg>}  {/* 에러 메시지 표시 */}
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
