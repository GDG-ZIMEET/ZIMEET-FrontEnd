import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles3';
import * as I from '../../../assets/Icons';

const Join3 = () => {
  const navigate = useNavigate(); 
  const [mbti, setMbti] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedFaces, setSelectedFaces] = useState([]);

  const genres = ['K-POP', 'POP', '발라드', '힙합', 'J-POP', '재즈', '밴드', '클래식'];
  const styles = ['캐주얼', '스트릿', '단정', '빈티지', '힙', '스포티', '포멀', '큐티'];
  const ages = ['연상', '동갑', '연하', '무관'];
  const faces = ['강아지', '고양이', '햄스터', '여우', '곰', '공룡', '토끼', '늑대'];

  const handleNext = () => {
    if (isFormComplete) {
      navigate('/'); 
    }
  };

  // 선택 상태 관리 함수
  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };


  const isFormComplete = 
    mbti &&
    selectedGenres.length > 0 &&
    selectedStyles.length > 0 &&
    selectedAges.length > 0 &&
    selectedFaces.length > 0;

  return (
    <S.JoinContainer>
      <S.LogoContainer>
        <S.Logo>
          <I.ZimeetLogo />
        </S.Logo>
        <S.LogoTitle>마지막 파트!</S.LogoTitle>
        <S.LogoText>이성 팀에게 보이는 정보에요. 요즘은 솔직함이 트렌드 :)</S.LogoText>
      </S.LogoContainer>
      <S.JoinForm>
        <S.OptionTitle>MBTI</S.OptionTitle>
        <S.JoinInput
          type="text"
          placeholder="MBTI를 대문자로 입력해주세요"
          value={mbti}
          onChange={(e) => setMbti(e.target.value)}
        />
        {mbti && (
          <>
            <S.SelectContainer>
              <S.SelectTopContainer>
                <S.ChooseOne>한 개씩 고르기👆</S.ChooseOne>
              </S.SelectTopContainer>
              <S.OptionTitle>음악 장르</S.OptionTitle>
              <S.OptionText>어떤 음악을 좋아하시나요?</S.OptionText>
              <S.SelectGrid>
                {genres.map((genre) => (
                  <S.SelectButton
                    key={genre}
                    type="button"
                    onClick={() => toggleSelection(genre, selectedGenres, setSelectedGenres)}
                    selected={selectedGenres.includes(genre)}
                  >
                    {genre}
                  </S.SelectButton>
                ))}
              </S.SelectGrid>
            </S.SelectContainer>

            <S.SelectContainer>
              <S.OptionTitle>내 스타일</S.OptionTitle>
              <S.OptionText>어떤 패션 스타일을 좋아하시나요?</S.OptionText>
              <S.SelectGrid>
                {styles.map((styles) => (
                  <S.SelectButton
                    key={styles}
                    type="button"
                    onClick={() => toggleSelection(styles, selectedStyles, setSelectedStyles)}
                    selected={selectedStyles.includes(styles)}
                  >
                    {styles}
                  </S.SelectButton>
                ))}
              </S.SelectGrid>
            </S.SelectContainer>

            <S.SelectContainer>
              <S.OptionTitle>선호 나이</S.OptionTitle>
              <S.OptionText>어떤 나이 차이를 좋아하시나요?</S.OptionText>
              <S.SelectGrid>
                {ages.map((ages) => (
                  <S.SelectButton
                    key={ages}
                    type="button"
                    onClick={() => toggleSelection(ages, selectedAges, setSelectedAges)}
                    selected={selectedAges.includes(ages)}
                  >
                    {ages}
                  </S.SelectButton>
                ))}
              </S.SelectGrid>
            </S.SelectContainer>

            <S.SelectContainer>
              <S.OptionTitle>선호 이상형</S.OptionTitle>
              <S.OptionText>어떤 동물상을 좋아하시나요?</S.OptionText>
              <S.SelectGrid>
                {faces.map((faces) => (
                  <S.SelectButton
                    key={faces}
                    type="button"
                    onClick={() => toggleSelection(faces, selectedFaces, setSelectedFaces)}
                    selected={selectedFaces.includes(faces)}
                  >
                    {faces}
                  </S.SelectButton>
                ))}
              </S.SelectGrid>
            </S.SelectContainer>
          </>
        )}
        <S.BtnContainer>
          <S.JoinBtn 
            disabled={!isFormComplete}
            onClick={handleNext}
          >
            {isFormComplete ? '회원가입 완료하기' : '모든 정보를 입력해주세요.'}
          </S.JoinBtn>
        </S.BtnContainer>
      </S.JoinForm>
    </S.JoinContainer>
  );
};

export default Join3;
