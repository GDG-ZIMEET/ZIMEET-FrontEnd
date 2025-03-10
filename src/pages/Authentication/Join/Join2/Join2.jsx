import * as S from './Styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { joinState } from '../../../../recoil/state/joinState';
import { getImageByEmoji } from 'utils/IconMapper';
import { majorMap } from '../../../../data/SignUpData';
import { LogoContainer } from 'components/Authentication/Join/LogoContainer/LogoContainer';

const Join2 = () => {
  const [joinData, setJoinData] = useRecoilState(joinState);
  const [isNicknameValid, setIsNicknameValid] = useState(true);
  const navigate = useNavigate();

  const isFormComplete = 
    joinData.major && 
    joinData.nickname && 
    joinData.emoji&&
    isNicknameValid;

  const handleNext = () => {
    if (isFormComplete) {
      navigate('/join3'); 
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    setJoinData({ ...joinData, nickname: value });
    setIsNicknameValid(value.length >= 2 && value.length <= 7);
    // console.log(isNicknameValid)
  };
  
  return (
    <S.JoinLayout>
      <LogoContainer title="프로필 꾸미기" text="ZI밋의 컨셉은 블라인드! 그만큼 아래 내용이 중요해요." />
      <S.JoinContainer>
        <S.JoinText>학과</S.JoinText>
        <S.SelectContainer>
          <S.JoinSelect
            value={joinData.major}
            onChange={(e) => setJoinData({ ...joinData, major: e.target.value })}
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
          placeholder="나를 표현할 닉네임을 입력해주세요"
          value={joinData.nickname}
          onChange={handleNicknameChange}
        />
        {!isNicknameValid && <S.ErrorMessage>2글자 이상 7글자 이하로 작성해주세요.</S.ErrorMessage>}
        <S.EmojiContainer>
          <S.JoinText>이모지</S.JoinText>
          <S.EmojiText>이모지는 프로필 사진 대신 쓰여요. <br />
          아래 동그라미를 터치해서 이모지를 변경할 수 있어요.</S.EmojiText>
          <S.CircleWrap>
            <S.EmojiWrap onClick={() => navigate('/selectemoji')}>
              <S.TossEmoji>
                <img src={getImageByEmoji(joinData.emoji)} alt={joinData.emoji} />
              </S.TossEmoji>
            </S.EmojiWrap>
          </S.CircleWrap>
        </S.EmojiContainer>

        <S.BtnContainer>
          <S.JoinBtn disabled={!isFormComplete} onClick={handleNext}>
            {isFormComplete ? '다음으로' : '모든 정보를 입력해주세요.'}
          </S.JoinBtn>
        </S.BtnContainer>
      </S.JoinContainer>
    </S.JoinLayout>
  );
};

export default Join2;
