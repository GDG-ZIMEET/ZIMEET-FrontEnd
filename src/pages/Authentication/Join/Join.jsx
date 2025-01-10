import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import * as I from '../../../assets/Icons';

const Join = () => {
  const [grade, setGrade] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 
  
  const gradeOptions = Array.from({ length: 4 }, (_, index) => (
    <option key={index} value={index + 1}>
      {index + 1} 학년
    </option>
  ));

  const ageOptions = Array.from({ length: 10 }, (_, index) => (
    <option key={index} value={index + 20}>
      {index + 20}세
    </option>
  ));

  const isFormComplete = name && studentId && password && confirmPassword && grade && age && gender;

  const handleNext = () => {
    if (isFormComplete) {
      navigate('/join2'); 
    }
  };

  return (
    <S.JoinContainer>
      <S.LogoContainer>
        <S.Logo>
          <I.ZimeetLogo />
        </S.Logo>
        <S.LogoTitle>기본 정보</S.LogoTitle>
        <S.LogoText>딱, 필요한 정보만, 간결하게!</S.LogoText>
      </S.LogoContainer>
      <S.JoinForm>
        <S.JoinText>이름</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="이름을 입력해주세요. (공개되지 않아요)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.JoinText>학번</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="학번 9자리를 입력해주세요. (입학 년도만 공개돼요)"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <S.JoinText>비밀번호</S.JoinText>
        <S.JoinInput
          type="password"
          placeholder="숫자 4~6자리를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.JoinText>비밀번호 확인</S.JoinText>
        <S.JoinInput
          type="password"
          placeholder="비밀번호는 암호화돼요."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <S.JoinText>학년 / 나이</S.JoinText>
        <S.SelectContainer>
          <S.JoinSelect
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">학년</option>
            {gradeOptions}
          </S.JoinSelect>
          <S.JoinSelect
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">나이</option>
            {ageOptions}
          </S.JoinSelect>
        </S.SelectContainer>
        <S.JoinText>성별</S.JoinText>
        <S.GenderContainer>
          <S.GenderButton
            type="button"
            selected={gender === '남성'}
            onClick={() => setGender('남성')}
          >
            남성
          </S.GenderButton>
          <S.GenderButton
            type="button"
            selected={gender === '여성'}
            onClick={() => setGender('여성')}
          >
            여성
          </S.GenderButton>
        </S.GenderContainer>
        <S.BtnContainer>
          <S.BtnText>위 내용은 수정할 수 없어요. 꼼꼼히 확인해주세요</S.BtnText>
          <S.JoinBtn 
            disabled={!isFormComplete}
            onClick={handleNext}
          >
            {isFormComplete ? '다음으로' : '모든 정보를 입력해주세요.'}
          </S.JoinBtn>
        </S.BtnContainer>
      </S.JoinForm>
    </S.JoinContainer>
  );
};

export default Join;
