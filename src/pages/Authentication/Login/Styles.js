import styled from 'styled-components';

export const LoginContainer = styled.div`
  border: 1px solid black;
  width: 393px; height: 852px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const LogoContainer = styled.h1`
  text-align: center;
  overflow: hidden;
  margin-bottom: 15%;
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
  padding-bottom: 15%;
`;

export const LoginInput = styled.input`
  width: 333px; height: 48px;
  background-color: #f9fafb;
  border: 1px solid rgba(2,32,71, 0.05);
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const LoginBtn = styled.button`
  font-weight: 700;
  width: 333px; height: 53px;
  background-color: black;
  border-radius: 10px;
  margin-bottom: 5px;
  color: white;
`;

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JoinText = styled.p`
  font-family: Pretendard;
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 400;
`;

export const JoinBtn = styled.button`
  font-weight: 700;
  width: 333px; height: 53px;
  background-color: rgba(234, 67, 53, 0.1);
  border-radius: 10px;
  margin-bottom: 5px;
  color: #EA4335;
`;

export const BottomLogoContainer = styled.div`
  margin-top: 20%;
`;