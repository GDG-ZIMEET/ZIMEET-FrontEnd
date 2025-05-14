import * as S from './Styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { joinState } from '../../../../recoilStores/state/joinState';
import { getImageByEmoji } from 'utils/IconMapper';
import { majorMap } from '../../../../data/SignUpData';
import { LogoContainer } from 'components/Authentication/Join/LogoContainer/LogoContainer';
import { checkDuplicateNickname } from 'api/Authentication/checkDuplicateNickname';
import { track } from '@amplitude/analytics-browser';

const Join2 = () => {
  const [joinData, setJoinData] = useRecoilState(joinState);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const [isChecking, setIsChecking] = useState(false);
  const [nicknameError, setNicknameError] = useState('');
  const navigate = useNavigate();

  const isFormComplete = 
    joinData.major && 
    joinData.nickname && 
    joinData.emoji&&
    isNicknameValid;

  useEffect(() => {
    track('[접속]회원가입_두번째');
  }, []);

  const handleMajorSelect = (e) => {
    setJoinData({ ...joinData, major: e.target.value });
    track('[클릭]회원가입_두번째_학과선택');
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setJoinData({ ...joinData, nickname: value });
    setIsNicknameValid(value.length >= 2 && value.length <= 7);
    setNicknameError("");
    
    if (value.length >= 2 && value.length <= 7) {
      track('[입력]회원가입_두번째_닉네임', {
        nickname: value
      });
    }
  };

  const handleEmojiClick = () => {
    track('[클릭]회원가입_두번째_이모지');
    navigate('/selectemoji');
  };

  const handleNext = async (e) => {
    e.preventDefault();
    
    if (!isFormComplete) {
      track('[클릭]회원가입_두번째_다음버튼(비활성)');
      return;
    }

    track('[클릭]회원가입_두번째_다음버튼(활성)');
    
    setIsChecking(true);
    const isUnique = await checkDuplicateNickname(joinData.nickname, setNicknameError);
    setIsChecking(false);
    if (isUnique) {
      navigate('/join3');
    }
  };
  
  return (
    <S.JoinLayout>
      <LogoContainer title="프로필 꾸미기" text="ZI밋의 컨셉은 블라인드! 그만큼 아래 내용이 중요해요." />
      <S.JoinContainer>
        <S.JoinText>학과</S.JoinText>
        <S.SelectContainer>
          <S.JoinSelect
            value={joinData.major}
            onChange={handleMajorSelect}
          >
            <option value="">학과를 선택해주세요.</option>
            {Object.keys(majorMap).map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </S.JoinSelect>
        </S.SelectContainer>
        <S.JoinText>닉네임</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="닉네임은 이성에게 보여지니 이름으로 하지 마세요!"
          value={joinData.nickname}
          onChange={handleNicknameChange}
        />
        {!isNicknameValid && <S.ErrorMessage>2글자 이상 7글자 이하로 작성해주세요.</S.ErrorMessage>}
        {nicknameError && <S.ErrorMessage>{nicknameError}</S.ErrorMessage>}
        <S.EmojiContainer>
          <S.JoinText>이모지</S.JoinText>
          <S.EmojiText>이모지는 프로필 사진 대신 쓰여요. <br />
          아래 동그라미를 터치해서 이모지를 변경할 수 있어요.</S.EmojiText>
          <S.CircleWrap>
            <S.EmojiWrap onClick={handleEmojiClick}>
              <S.TossEmoji>
                <img src={getImageByEmoji(joinData.emoji)} alt={joinData.emoji} />
              </S.TossEmoji>
            </S.EmojiWrap>
          </S.CircleWrap>
        </S.EmojiContainer>

        <S.BtnContainer>
          <S.JoinBtn 
            type="button"
            disabled={!isFormComplete} 
            onClick={handleNext}
          >
            {!isFormComplete ? '모든 정보를 입력해주세요.' : isChecking ? '중복 확인 중...' : '다음으로'}
          </S.JoinBtn>
        </S.BtnContainer>
      </S.JoinContainer>
    </S.JoinLayout>
  );
};

export default Join2;
