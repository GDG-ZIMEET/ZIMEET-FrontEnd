import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%; height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 5%;
  font-family: Pretendard, sans-serif;
`;

export const LogoContainer = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin: 25% 0 15% 0;
`;

export const Logo = styled.div`
  width: 80%;
  height: 80%;
  text-align: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.p`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 14px;
`;


export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
  margin-bottom: 15%;
  width: 100%; height: 30%;
`;

export const LoginInput = styled.input`
  width: 100%; height: 22%;
  background-color: #f9fafb;
  border: 1px solid rgba(2,32,71, 0.05);
  border-radius: 0.6rem;
  margin-bottom: 2%;
  font-size: 14px;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    font-size: 16px;
  }
`;

export const LoginBtn = styled.button`
  font-weight: 700;
  width: 100%; height: 22%;
  background-color: black;
  border-radius: 0.6rem;
  margin-bottom: 2%;
  color: white;
`;

export const ErrorMsg = styled.p`
  color: #EA4335;
  font-size: 13px;
`;

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; height: 10%;
`;

export const JoinText = styled.p`
  font-family: Pretendard;
  font-size: 15px;
  margin-bottom: 2%;
  font-weight: 400;
`;

export const JoinBtn = styled.button`
  font-weight: 700;
  width: 100%; height: 75%;
  background-color: rgba(234, 67, 53, 0.1);
  border-radius: 0.6rem;
  color: #EA4335;
`;

export const BottomLogoContainer = styled.div`
  margin-top: 20%;
`;