import React from 'react';
import * as S from './Styles';
import * as I from '../../../assets/Icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

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
          type='text'
          placeholder='학번'
        />
        <S.LoginInput 
          type='password'
          placeholder='비밀번호'
        />
        <S.LoginBtn>로그인</S.LoginBtn>
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
