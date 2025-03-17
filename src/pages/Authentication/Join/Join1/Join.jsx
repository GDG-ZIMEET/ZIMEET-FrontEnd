import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { joinState } from '../../../../recoil/state/joinState';
import { gradeOptions, gradeDisplayOptions } from 'data/SignUpData';
import { LogoContainer } from 'components/Authentication/Join/LogoContainer/LogoContainer';
import { checkDuplicateNumber } from 'api/Authentication/checkDuplicateNumber';

const Join = () => {
  const [joinData, setJoinData] = useRecoilState(joinState);
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const [isNameValid, setIsNameValid] = useState(true);
  const [isStudentNumberValid, setIsStudentNumberValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [studentNumberError, setStudentNumberError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');


  const ageOptions = Array.from({ length: 9 }, (_, index) => (
    <option key={index} value={index + 20}>
      {index + 20}
    </option>
  ));

  const isPasswordMatch = joinData.password === confirmPassword;
  
  const isFormComplete =
    joinData.name &&
    joinData.studentNumber &&
    joinData.password &&
    joinData.phoneNumber &&
    joinData.grade &&
    joinData.age &&
    joinData.gender &&
    isNameValid &&
    isStudentNumberValid &&
    isPasswordValid &&
    isPhoneNumberValid &&
    isPasswordMatch
  ;

  const isButtonDisabled = !isFormComplete;

  const handleNext = async (e) => {
    e.preventDefault();
  
    if (!isPasswordMatch) return;
    if (isFormComplete) {
      setIsChecking(true);
      
      const isUnique = await checkDuplicateNumber(
        joinData.studentNumber,
        joinData.phoneNumber,
        setStudentNumberError,
        setPhoneNumberError
      );
  
      setIsChecking(false);
      
      if (isUnique) {
        navigate('/join2');
      }
    }
  };
  

  const handleNameChange = (e) => {
    const regex = /^[ㄱ-ㅎ|가-힣\s]+$/;
    const value = e.target.value;
    setJoinData({ ...joinData, name: value });
    setIsNameValid(value === '' || regex.test(value));
    // console.log(isNameValid)
  };

  const handleStudentNumberChange = (e) => {
    const regex = /^\d{9}$/;
    const value = e.target.value;
    setJoinData({ ...joinData, studentNumber: value });
    setIsStudentNumberValid(regex.test(value));
    setStudentNumberError("");
    // console.log(isStudentNumberValid)
  };

  const handlePasswordChange = (e) => {
    const regex = /^\d{4,6}$/;
    const value = e.target.value;
    setJoinData({ ...joinData, password: value });
    setIsPasswordValid(regex.test(value));
    // console.log(isPasswordValid)
  };

  const handlePhoneNumberChange = (e) => {
    const regex = /^010\d{8}$/;
    const value = e.target.value;
    setJoinData({ ...joinData, phoneNumber: value });
    setIsPhoneNumberValid(regex.test(value));
    setPhoneNumberError("");
    // console.log(isPhoneNumberValid)
  };

  const handleGradeChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue !== "") {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
    setJoinData({ ...joinData, grade: gradeOptions[selectedValue - 1] });
  };

  const handleAgeChange = (e) => {
    const selectedValue = e.target.value;
    setJoinData({ ...joinData, age: selectedValue });
  };


  return (
    <S.JoinLayout>
      <LogoContainer title="기본 정보" text="딱, 필요한 정보만, 간결하게!" />
      
      <S.JoinContainer>
        <S.JoinText>이름</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="이름을 입력해주세요. (공개되지 않아요)"
          value={joinData.name}
          onChange={handleNameChange}
        />
        {!isNameValid && <S.ErrorMessage>한글과 공백만 입력 가능합니다.</S.ErrorMessage>}
        <S.JoinText>학번</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="학번 9자리를 입력해주세요. (입학 년도만 공개돼요)"
          value={joinData.studentNumber}
          onChange={handleStudentNumberChange}
        />
        {!isStudentNumberValid && <S.ErrorMessage>학번 9자리를 입력해주세요.</S.ErrorMessage>}
        {studentNumberError && <S.ErrorMessage>{studentNumberError}</S.ErrorMessage>}
        <S.JoinText>비밀번호</S.JoinText>
        <S.JoinInput
          type="password"
          placeholder="숫자 4~6자리를 입력해주세요."
          value={joinData.password}
          onChange={handlePasswordChange}
        />
        {!isPasswordValid && <S.ErrorMessage>숫자 4~6자리를 입력해주세요.</S.ErrorMessage>}    
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
          value={joinData.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        {!isPhoneNumberValid && <S.ErrorMessage>010으로 시작하는 숫자 11자리를 입력해주세요.</S.ErrorMessage>}
        {phoneNumberError && <S.ErrorMessage>{phoneNumberError}</S.ErrorMessage>}
        <S.JoinText>학년 / 나이</S.JoinText>
        <S.SelectContainer>
          <S.SelectBox>
            <S.JoinSelect
              $isSelected={joinData.grade !== undefined}
              value={gradeDisplayOptions[gradeOptions.indexOf(joinData.grade)] || ''}
              onChange={handleGradeChange}
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
              $isSelected={joinData.age !== ''}
              value={joinData.age}
              onChange={handleAgeChange}
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
            type="button"
            disabled={isButtonDisabled}
            onClick={handleNext}
          >
            {isButtonDisabled ? '모든 정보를 입력해주세요.' : isChecking ? '중복 확인 중...' : '다음으로'}
          </S.JoinBtn>
        </S.BtnContainer>
      </S.JoinContainer>
    </S.JoinLayout>
  );
};

export default Join;
