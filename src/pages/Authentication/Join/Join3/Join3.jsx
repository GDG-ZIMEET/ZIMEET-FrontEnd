import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import Modal from 'components/Authentication/Join/JoinModal/Modal';
import { joinState } from '../../../../recoil/state/joinState';
import { postJoin } from '../../../../api/Authentication/PostJoin';
import {  mbtiOptions, musicMap, styleMap, ageMap, faceMap } from '../../../../data/SignUpData';
import { LogoContainer } from 'components/Authentication/Join/LogoContainer/LogoContainer';
import * as amplitude from '@amplitude/analytics-browser';

const Join3 = () => {
  const navigate = useNavigate(); 
  const [joinData, setJoinData] = useRecoilState(joinState);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    amplitude.track('[접속]회원가입_세번째');
  }, []);

  const handleSignUp = async (event) => {
    event.preventDefault();
    setIsLoading(true); 
    
    try {
      const response = await postJoin(joinData);
      if (response) {
        amplitude.track('[클릭]회원가입_세번째_다음버튼(활성)');
        setIsModalOpen(true);
      } else {
        alert('회원가입 실패. 다시 시도해주세요.');
      }
    } catch (error) {
      alert('서버 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/meeting22');
  };

  const isFormComplete = 
    joinData.mbti &&
    mbtiOptions.includes(joinData.mbti) && 
    joinData.music && 
    joinData.style && 
    joinData.idealAge && 
    joinData.idealType;

  return (
    <S.JoinLayout>
      <LogoContainer title="마지막 파트!" text="이성 팀에게 보이는 정보에요. 요즘은 솔직함이 트렌드 :)" />

      <S.JoinContainer as="form" onSubmit={handleSignUp}> 
        <S.JoinText>MBTI</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="MBTI를 입력해주세요"
          value={joinData.mbti}
          onChange={(e) => {
            const newMbti = e.target.value.toUpperCase();
            setJoinData({ ...joinData, mbti: newMbti });
            amplitude.track('[입력]회원가입_세번째_MBTI', { mbti: newMbti });
          }}
        />
          <S.SelectContainer>
            {mbtiOptions.includes(joinData.mbti) && (
              <>
                <S.HrLine />
                <S.SelectTopContainer>
                  <S.ChooseOne>한 개씩 고르기👆</S.ChooseOne>
                </S.SelectTopContainer>
          
                <S.SelectBox>
                  <S.JoinText>음악 장르</S.JoinText>
                  <S.OptionText>어떤 음악을 좋아하시나요?</S.OptionText>
                  <S.SelectGrid>
                    {Object.values(musicMap).map((music) => (
                      <S.SelectButton
                        key={music}
                        type="button"
                        onClick={() => {
                          setJoinData({ ...joinData, music });
                          amplitude.track('[클릭]회원가입_세번째_음악장르', { music });
                        }}
                        selected={joinData.music === music}
                      >
                        {Object.keys(musicMap).find((key) => musicMap[key] === music)}
                      </S.SelectButton>
                    ))}
                  </S.SelectGrid>
                </S.SelectBox>
          
                <S.SelectBox>
                  <S.JoinText>내 스타일</S.JoinText>
                  <S.OptionText>어떤 패션 스타일을 좋아하시나요?</S.OptionText>
                  <S.SelectGrid>
                    {Object.values(styleMap).map((style) => (
                      <S.SelectButton
                        key={style}
                        type="button"
                        onClick={() => {
                          setJoinData({ ...joinData, style });
                          amplitude.track('[클릭]회원가입_세번째_패션스타일', { style });
                        }}
                        selected={joinData.style === style}
                      >
                        {Object.keys(styleMap).find((key) => styleMap[key] === style)}
                      </S.SelectButton>
                    ))}
                  </S.SelectGrid>
                </S.SelectBox>
          
                <S.SelectAgeBox>
                  <S.JoinText>선호 나이</S.JoinText>
                  <S.OptionText>어떤 나이 차이를 좋아하시나요?</S.OptionText>
                  <S.SelectAgeGrid>
                    {Object.values(ageMap).map((age) => (
                      <S.SelectButton
                        key={age}
                        type="button"
                        onClick={() => {
                          setJoinData({ ...joinData, idealAge: age });
                          amplitude.track('[클릭]회원가입_세번째_나이', { age });
                        }}
                        selected={joinData.idealAge === age}
                      >
                        {Object.keys(ageMap).find((key) => ageMap[key] === age)}
                      </S.SelectButton>
                    ))}
                  </S.SelectAgeGrid>
                </S.SelectAgeBox>
          
                <S.SelectBox>
                  <S.JoinText>선호 이상형</S.JoinText>
                  <S.OptionText>어떤 동물상을 좋아하시나요?</S.OptionText>
                  <S.SelectGrid>
                    {Object.values(faceMap).map((face) => (
                      <S.SelectButton
                        key={face}
                        type="button"
                        onClick={() => {
                          setJoinData({ ...joinData, idealType: face });
                          amplitude.track('[클릭]회원가입_세번째_이상형', { face });
                        }}
                        selected={joinData.idealType === face}
                      >
                        {Object.keys(faceMap).find((key) => faceMap[key] === face)}
                      </S.SelectButton>
                    ))}
                  </S.SelectGrid>
                </S.SelectBox>
              </>
            )}
          </S.SelectContainer>

        <S.BtnContainer>
          <S.AgreementText>
            아래 버튼을 눌러 ZI밋의
            <S.OutText href='/notion/termsOfService' target="_blank" rel="noopener noreferrer"> 이용약관</S.OutText>과
            <S.OutText href='/notion/personalInfoPolicy' target="_blank" rel="noopener noreferrer">  개인정보처리방침</S.OutText>
            에 동의합니다.
          </S.AgreementText>

          <S.JoinBtn
              type="submit"
              disabled={!isFormComplete}
              onClick={() => {
                if (!isFormComplete) {
                  amplitude.track('[클릭]회원가입_세번째_다음버튼(비활성)');
                }
              }}
          >
            {isFormComplete ? '회원가입 완료하기' : '모든 정보를 입력해주세요.'}
          </S.JoinBtn>
        </S.BtnContainer>
      </S.JoinContainer>

      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </S.JoinLayout>
  );
};

export default Join3;
