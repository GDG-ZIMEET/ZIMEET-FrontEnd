import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import ModifyNickname from 'components/MyPage/ModifyNickname/ModifyNickname';

import { getmyProfile } from 'api/Mypage/GetmyProfile';
import { getImageByEmoji } from 'utils/IconMapper';
import { mappingStyle, mappingAge, mappingFace } from 'data/SignUpData';
import { Header } from '../../../components/Common/Header/Header/Header';

const ModifyProfile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const [myProfileData, setMyProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleBack = () => {
    navigate(-1);
  };

  const handleNicknameClick = () => {
    setModalOpen(true);
  };

  const handleEmojiClick = () => {
    navigate('/modifyemoji'); 
  };

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const response = await getmyProfile();
        if (response) {
          setMyProfileData(response);
        } else {
          setMyProfileData(null);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setMyProfileData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyProfile();
  }, []);

  return (
    <S.JoinContainer>
      <S.TopBarContainer>
        <S.BackBtn onClick={handleBack} />
        <S.TopBarText>프로필 수정</S.TopBarText>
      </S.TopBarContainer>
      <Header title='프로필 수정' />

      {isLoading? (
        <>
          <S.ProfileValues>로딩 중 입니다.</S.ProfileValues>
        </>
      ) : myProfileData? (
        <>
          <S.ContentContainer>
            <S.EmojiContainer>
              <S.CircleWrap className='emoji' onClick={handleEmojiClick}>
                <S.EmojiWrap>
                  <S.TossEmoji src={getImageByEmoji(myProfileData.data.emoji)} ></S.TossEmoji>
                </S.EmojiWrap>
              </S.CircleWrap>
              <S.Text>이모지를 눌러서 바꿔보세요!</S.Text>
            </S.EmojiContainer>

            <S.ProfileContainer>
              <S.ProfileWrapper>
                <S.ProfileItems>이름</S.ProfileItems>
                <S.ProfileValues>{myProfileData.data.name}</S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper onClick={handleNicknameClick} style={{ cursor: 'pointer' }}>
                <S.ProfileItems>닉네임</S.ProfileItems>
                <S.ProfileValues className='nickname'>{myProfileData.data.nickname}</S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper>
                <S.ProfileItems>학과/계열</S.ProfileItems>
                <S.ProfileValues>{myProfileData.data.major}</S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper>
                <S.ProfileItems>학번</S.ProfileItems>
                <S.ProfileValues>{myProfileData.data.studentNumber}</S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper>
                <S.ProfileItems>학년 | 나이</S.ProfileItems>
                <S.ProfileValues>{myProfileData.data.grade} | {myProfileData.data.age}</S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper>
                <S.ProfileItems>MBTI</S.ProfileItems>
                <S.ProfileValues>{myProfileData.data.mbti}</S.ProfileValues>
              </S.ProfileWrapper>
            </S.ProfileContainer>

            <S.PreferContainer>
              <S.PreferWrapper>
                <S.CircleWrap>
                  <S.EmojiWrap>
                    <S.PreferValue>{myProfileData.data.mbti}</S.PreferValue>
                  </S.EmojiWrap>
                </S.CircleWrap>
                <S.Text>MBTI</S.Text>
              </S.PreferWrapper>

              <S.PreferWrapper>
                <S.CircleWrap>
                  <S.EmojiWrap>
                    <S.PreferValue>{mappingStyle(myProfileData.data.style)}</S.PreferValue>
                  </S.EmojiWrap>
                </S.CircleWrap>
                <S.Text>스타일</S.Text>
              </S.PreferWrapper>

              <S.PreferWrapper>
                <S.CircleWrap>
                  <S.EmojiWrap className='blue'>
                    <S.PreferValue>{mappingFace(myProfileData.data.idealType)}</S.PreferValue>
                  </S.EmojiWrap>
                </S.CircleWrap>
                <S.Text>이상형</S.Text>
              </S.PreferWrapper>

              <S.PreferWrapper>
                <S.CircleWrap>
                  <S.EmojiWrap className='blue'>
                    <S.PreferValue>{mappingAge(myProfileData.data.idealAge)}</S.PreferValue>
                  </S.EmojiWrap>
                </S.CircleWrap>
                <S.Text>선호나이</S.Text>
              </S.PreferWrapper>
            </S.PreferContainer>

            <S.BtnContainer>
              <S.Text>닉네임과 이모지만 변경할 수 있어요.</S.Text>
              <S.ModifyBtn>
                변경된 내용이 없어요.
              </S.ModifyBtn>
            </S.BtnContainer>
          </S.ContentContainer>
        </>
      ) : (
        <>
          <S.PreferValue>로그인이 필요한 페이지 입니다.</S.PreferValue>
        </>
      )}


      <ModifyNickname isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </S.JoinContainer>
  );
};

export default ModifyProfile;
