import React, { useState } from 'react';
import * as S from './Styles2';
import * as I from '../../../assets/Icons';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { emojiState } from 'recoil/state/emojiState';

const Join2 = () => {
  const [major, setMajor] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const selectedEmoji = useRecoilValue(emojiState);
  const isFormComplete = major && nickname;

  const handleNext = () => {
    if (isFormComplete) {
      navigate('/join3'); 
    }
  };

  return (
    <S.JoinContainer>
      <S.LogoContainer>
        <S.Logo>
          <I.ZimeetLogo />
        </S.Logo>
        <S.LogoTitle>프로필 꾸미기</S.LogoTitle>
        <S.LogoText>ZI밋의 컨셉은 블라인드! 그만큼 아래 내용이 중요해요.</S.LogoText>
      </S.LogoContainer>
      <S.JoinForm>
        <S.JoinText>학과</S.JoinText>
        <S.SelectContainer>
          <S.JoinSelect
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          >
            <option value="">학과를 선택해주세요.</option>
            <option value="tmp1">컴퓨터정보공학부</option>
            <option value="tmp2">미디어기술콘텐츠학과</option>
            <option value="tmp3">인공지능학과</option>
          </S.JoinSelect>
        </S.SelectContainer>
        <S.JoinText>닉네임</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="나를 표현할 닉네임을 입력해주세요"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <S.EmojiContainer>
          <S.JoinText>이모지</S.JoinText>
          <S.EmojiText>이모지는 프로필 사진 대신 쓰여요.</S.EmojiText>
          <S.EmojiText>아래 동그라미를 터치해서 이모지를 변경할 수 있어요.</S.EmojiText>
          <S.CircleWrap onClick={() => navigate('/selectemoji')}>
            <S.EmojiWrap>
              <S.TossEmoji>{selectedEmoji}</S.TossEmoji>
            </S.EmojiWrap>
          </S.CircleWrap>
        </S.EmojiContainer>
        <S.BtnContainer>
          <S.JoinBtn disabled={!isFormComplete} onClick={handleNext}>
            {isFormComplete ? '다음으로' : '모든 정보를 입력해주세요.'}
          </S.JoinBtn>
        </S.BtnContainer>
      </S.JoinForm>
    </S.JoinContainer>
  );
};

export default Join2;
