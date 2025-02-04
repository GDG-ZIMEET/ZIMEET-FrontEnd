import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import ModifyNickname from 'components/MyPage/ModifyNickname/ModifyNickname';

const ModifyProfile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleNicknameClick = () => {
    setModalOpen(true);
  };

  return (
    <S.JoinContainer>
      <S.TopBarContainer>
          <S.BackBtn onClick={handleBack} />
          <S.TopBarText>프로필 수정</S.TopBarText>
      </S.TopBarContainer>

      <S.ContentContainer>
        <S.EmojiContainer>
          <S.CircleWrap className='emoji' onClick={() => navigate('/modifyemoji')}>
            <S.EmojiWrap>
                <S.TossEmoji>🔥</S.TossEmoji>
            </S.EmojiWrap>
          </S.CircleWrap>
          <S.Text>이모지를 눌러서 바꿔보세요!</S.Text>
        </S.EmojiContainer>

        <S.ProfileContainer>
          <S.ProfileWrapper>
            <S.ProfileItems>이름</S.ProfileItems>
            <S.ProfileValues>장세연</S.ProfileValues>
          </S.ProfileWrapper>
          <S.ProfileWrapper onClick={handleNicknameClick} style={{ cursor: 'pointer' }}>
            <S.ProfileItems>닉네임</S.ProfileItems>
            <S.ProfileValues className='nickname'>불명</S.ProfileValues>
          </S.ProfileWrapper>
          <S.ProfileWrapper>
            <S.ProfileItems>학과/계열</S.ProfileItems>
            <S.ProfileValues>정보통신전자공학부</S.ProfileValues>
          </S.ProfileWrapper>
          <S.ProfileWrapper>
            <S.ProfileItems>학번</S.ProfileItems>
            <S.ProfileValues>202121346</S.ProfileValues>
          </S.ProfileWrapper>
          <S.ProfileWrapper>
            <S.ProfileItems>학년 | 나이</S.ProfileItems>
            <S.ProfileValues>4학년 | 24세</S.ProfileValues>
          </S.ProfileWrapper>
          <S.ProfileWrapper>
            <S.ProfileItems>MBTI</S.ProfileItems>
            <S.ProfileValues>ESFJ</S.ProfileValues>
          </S.ProfileWrapper>
        </S.ProfileContainer>

        <S.PreferContainer>
          <S.PreferWrapper>
            <S.CircleWrap>
              <S.EmojiWrap>
                  <S.PreferValue>ESFJ</S.PreferValue>
              </S.EmojiWrap>
            </S.CircleWrap>
            <S.Text>MBTI</S.Text>
          </S.PreferWrapper>

          <S.PreferWrapper>
            <S.CircleWrap>
              <S.EmojiWrap>
                  <S.PreferValue>큐티</S.PreferValue>
              </S.EmojiWrap>
            </S.CircleWrap>
            <S.Text>스타일</S.Text>
          </S.PreferWrapper>

          <S.PreferWrapper>
            <S.CircleWrap>
              <S.EmojiWrap className='blue'>
                  <S.PreferValue>공룡</S.PreferValue>
              </S.EmojiWrap>
            </S.CircleWrap>
            <S.Text>이상형</S.Text>
          </S.PreferWrapper>

          <S.PreferWrapper>
            <S.CircleWrap>
              <S.EmojiWrap className='blue'>
                  <S.PreferValue >연상</S.PreferValue>
              </S.EmojiWrap>
            </S.CircleWrap>
            <S.Text>선호나이</S.Text>
          </S.PreferWrapper>
        </S.PreferContainer>

        <S.BtnContainer>
          <S.Text>닉네임과 이모지만 변경할 수 있어요.</S.Text>
          <S.ModifyBtn 
              // disabled={!isFormComplete}
              // onClick={handleNext}
            >
              {/* {isFormComplete ? '저장하기' : '변경된 내용이 없어요.'} */}
              변경된 내용이 없어요.
          </S.ModifyBtn>
        </S.BtnContainer>
      </S.ContentContainer>

      <ModifyNickname isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </S.JoinContainer>
  );
};

export default ModifyProfile;
