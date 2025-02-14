import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { joinState } from '../../../recoil/state/joinState';
import { gradeOptions, gradeDisplayOptions } from 'data/SignUpData';

const Join = () => {
  const [joinData, setJoinData] = useRecoilState(joinState);
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const ageOptions = Array.from({ length: 9 }, (_, index) => (
    <option key={index} value={index + 20}>
      {index + 20}
    </option>
  ));

  const isFormComplete = 
          joinData.name && 
          joinData.studentNumber && 
          joinData.password && 
          //joinData.phoneNum &&
          joinData.grade && 
          joinData.age && 
          joinData.gender;

  const isPasswordMatch = joinData.password === confirmPassword;

  const handleNext = () => {
    if (!isPasswordMatch) return;
    if (isFormComplete) {
      navigate('/join2');
    }
  };

  return (
    <S.JoinLayout>
      <S.LogoContainer>
        <S.ZimeetLogo />
        <S.LogoTitle>기본 정보</S.LogoTitle>
        <S.LogoText>딱, 필요한 정보만, 간결하게!</S.LogoText>
      </S.LogoContainer>

      <S.JoinContainer>
        <S.JoinText>이름</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="이름을 입력해주세요. (공개되지 않아요)"
          value={joinData.name}
          onChange={(e) => setJoinData({ ...joinData, name: e.target.value })}
        />
        <S.JoinText>학번</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="학번 9자리를 입력해주세요. (입학 년도만 공개돼요)"
          value={joinData.studentNumber}
          onChange={(e) => setJoinData({ ...joinData, studentNumber: e.target.value })}
        />
        <S.JoinText>비밀번호</S.JoinText>
        <S.JoinInput
          type="password"
          placeholder="숫자 4~6자리를 입력해주세요."
          value={joinData.password}
          onChange={(e) => setJoinData({ ...joinData, password: e.target.value })}
        />
        <S.JoinText>비밀번호 확인</S.JoinText>
        <S.JoinInput
          type="password"
          placeholder="비밀번호는 암호화돼요."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPassword && !isPasswordMatch && <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>}
        <S.JoinText>전화번호</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="숫자만 입력해주세요."
          value={joinData.phoneNum}
          onChange={(e) => setJoinData({ ...joinData, phoneNum: e.target.value })}
        />
        <S.JoinText>학년 / 나이</S.JoinText>
        <S.SelectContainer>
          <S.SelectBox>
            <S.JoinSelect
               value={gradeDisplayOptions[gradeOptions.indexOf(joinData.grade)] || ''}
              onChange={(e) => setJoinData({ ...joinData, grade: gradeOptions[e.target.value - 1] })}
            >
              <option value="">선택</option>
              {gradeDisplayOptions.map((grade, index) => (
                <option key={index} value={index + 1}>
                  {grade}
                </option>
              ))}
            </S.JoinSelect>
            <S.SelectText>학년</S.SelectText>
          </S.SelectBox>
          <S.SelectBox>
            <S.JoinSelect
              value={joinData.age}
              onChange={(e) => setJoinData({ ...joinData, age: e.target.value })}
            >
              <option value="">선택</option>
              {ageOptions}
            </S.JoinSelect>
            <S.SelectText>세</S.SelectText>
          </S.SelectBox>
          <S.SelectComment>(만 나이 X)</S.SelectComment>
        </S.SelectContainer>

        <S.JoinText>성별</S.JoinText>
        <S.GenderContainer>
          <S.GenderButton
            type="button"
            selected={joinData.gender === 'MALE'}
            onClick={() => setJoinData({ ...joinData, gender: 'MALE' })}
          >
            남성
          </S.GenderButton>
          <S.GenderButton
            type="button"
            selected={joinData.gender === 'FEMALE'}
            onClick={() => setJoinData({ ...joinData, gender: 'FEMALE' })}
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
      </S.JoinContainer>
    </S.JoinLayout>
  );
};

export default Join;
