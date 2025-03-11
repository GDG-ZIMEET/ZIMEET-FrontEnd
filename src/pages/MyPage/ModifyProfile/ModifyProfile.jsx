import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Styles';
import ModifyNickname from 'components/MyPage/ModifyNickname/ModifyNickname';
import Header from 'components/Common/Header/Header/Header';

import { getmyProfile } from 'api/Mypage/GetmyProfile';
import { updateEmoji } from 'api/Mypage/UpdateEmoji';
import { updateNickname } from 'api/Mypage/UpdateNickname';
import { getImageByEmoji } from 'utils/IconMapper';
import { mappingStyle, mappingAge, mappingFace, mappinggrade } from 'data/SignUpData';

const ModifyProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [myProfileData, setMyProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [updatedNickname, setUpdatedNickname] = useState('');
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const response = await getmyProfile();
        if (response) {
          setMyProfileData(response);
          setUpdatedNickname(response.data.nickname);
          
          const previousPage = sessionStorage.getItem('previousPage');
          if (previousPage === 'modifyemoji') {
            const storedEmoji = sessionStorage.getItem('selectedEmoji');
            setSelectedEmoji(storedEmoji || response.data.emoji);
          } else {
            setSelectedEmoji(response.data.emoji);
            sessionStorage.removeItem('selectedEmoji'); 
          }
          
          sessionStorage.setItem('previousPage', 'modifyprofile');
          setIsModified(false);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyProfile();
  }, []);

  useEffect(() => {
    if (!location.pathname.includes('modifyprofile') && !location.pathname.includes('modifyemoji')) {
      sessionStorage.removeItem('previousPage');
    }
  }, [location]);

  useEffect(() => {
    if (myProfileData) {
      setIsModified(selectedEmoji !== myProfileData.data.emoji || updatedNickname !== myProfileData.data.nickname);
    }
  }, [selectedEmoji, updatedNickname, myProfileData]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleNicknameClick = () => {
    setModalOpen(true);
  };

  const handleEmojiClick = () => {
    sessionStorage.setItem('previousPage', 'modifyemoji');
    navigate('/modifyemoji');
  };

  const handleSaveChanges = async () => {
    try {
      if (myProfileData) {
        if (selectedEmoji !== myProfileData.data.emoji) {
          await updateEmoji({ emoji: selectedEmoji });
          sessionStorage.removeItem('selectedEmoji');
        }
        if (updatedNickname !== myProfileData.data.nickname) {
          await updateNickname({ nickname: updatedNickname });
        }
        alert('프로필이 성공적으로 업데이트되었습니다.');
        setIsModified(false);
        sessionStorage.removeItem('previousPage');
        navigate('/mypage');
      }
    } catch (error) {
      alert('업데이트에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.JoinContainer>
      <Header title='프로필 수정' />

      {isLoading ? (
        <S.LoadingContainer />
      ) : myProfileData ? (
        <>
          <S.ContentContainer>
            <S.EmojiContainer>
              <S.CircleWrap className='emoji' onClick={handleEmojiClick}>
                <S.EmojiWrap>
                  <S.TossEmoji src={getImageByEmoji(selectedEmoji)}></S.TossEmoji>
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
                <S.ProfileValues className='nickname'>{updatedNickname}</S.ProfileValues>
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
                <S.ProfileValues>{mappinggrade(myProfileData.data.grade)}학년 | {myProfileData.data.age}세</S.ProfileValues>
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
              <S.ModifyBtn onClick={handleSaveChanges} disabled={!isModified}>
                {isModified ? '변경사항 저장' : '변경된 내용이 없어요.'}
              </S.ModifyBtn>
            </S.BtnContainer>
          </S.ContentContainer>
        </>
      ) : (
        <>
          <S.PreferValue>로그인이 필요한 페이지 입니다.</S.PreferValue>
        </>
      )}

      <ModifyNickname 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onUpdateNickname={(newNickname) => {
          setUpdatedNickname(newNickname);
          setIsModified(true);
        }}
      />
    </S.JoinContainer>
  );
};

export default ModifyProfile;