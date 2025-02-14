import * as S from './Styles2';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { joinState } from '../../../recoil/state/joinState';
import { getImageByEmoji } from 'utils/IconMapper';
import { majorOptions } from '../../../data/SignUpData';

const Join2 = () => {
  const [joinData, setJoinData] = useRecoilState(joinState);
  const navigate = useNavigate();

  const isFormComplete = 
    joinData.major && 
    joinData.nickname && 
    joinData.emoji;

  const handleNext = () => {
    if (isFormComplete) {
      navigate('/join3'); 
    }
  };
  
  return (
    <S.JoinLayout>
      <S.LogoContainer>
        <S.ZimeetLogo />
        <S.LogoTitle>프로필 꾸미기</S.LogoTitle>
        <S.LogoText>ZI밋의 컨셉은 블라인드! 그만큼 아래 내용이 중요해요.</S.LogoText>
      </S.LogoContainer>
      <S.JoinContainer>
        <S.JoinText>학과</S.JoinText>
        <S.SelectContainer>
          <S.JoinSelect
            value={joinData.major}
            onChange={(e) => setJoinData({ ...joinData, major: e.target.value })}
          >
            <option value="">학과를 선택해주세요.</option>
            {majorOptions.map((major, index) => (
              <option key={index} value={major}>
                {major}
              </option>
            ))}
          </S.JoinSelect>
        </S.SelectContainer>
        <S.JoinText>닉네임</S.JoinText>
        <S.JoinInput
          type="text"
          placeholder="나를 표현할 닉네임을 입력해주세요"
          value={joinData.nickname}
          onChange={(e) => setJoinData({ ...joinData, nickname: e.target.value })}
        />
        
        <S.EmojiContainer>
          <S.JoinText>이모지</S.JoinText>
          <S.EmojiText>이모지는 프로필 사진 대신 쓰여요. <br />
          아래 동그라미를 터치해서 이모지를 변경할 수 있어요.</S.EmojiText>
          <S.CircleWrap onClick={() => navigate('/selectemoji')}>
            <S.EmojiWrap>
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
