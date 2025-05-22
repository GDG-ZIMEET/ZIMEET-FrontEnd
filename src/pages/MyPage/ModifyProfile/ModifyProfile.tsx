import { useState, useEffect, SetStateAction } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Styles';
import ModifyNickname from 'components/MyPage/ModifyNickname/ModifyNickname';
import Header from 'components/Common/Header/Header/Header';
import { getmyProfile } from 'api/Mypage/GetmyProfile';
import { updateEmoji } from 'api/Mypage/UpdateEmoji';
import { updateNickname } from 'api/Mypage/UpdateNickname';
import { getImageByEmoji } from 'utils/IconMapper';
import {
  mappingStyle,
  mappingAge,
  mappingFace,
  mappinggrade,
} from 'data/SignUpData';
import { track } from '@amplitude/analytics-browser';
import { MyProfileType } from 'recoilStores/type/MyPage/MyProfileType';

const ModifyProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [myProfileData, setMyProfileData] = useState<MyProfileType | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [updatedNickname, setUpdatedNickname] = useState('');
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    track('[접속]마이_내정보수정');
    const fetchMyProfile = async () => {
      try {
        const response = await getmyProfile();
        if (response) {
          setMyProfileData(response.data);
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
    if (
      !location.pathname.includes('modifyprofile') &&
      !location.pathname.includes('modifyemoji')
    ) {
      sessionStorage.removeItem('previousPage');
    }
  }, [location]);

  useEffect(() => {
    if (myProfileData) {
      setIsModified(
        selectedEmoji !== myProfileData.emoji ||
          updatedNickname !== myProfileData.nickname,
      );
    }
  }, [selectedEmoji, updatedNickname, myProfileData]);

  const handleNicknameClick = () => {
    setModalOpen(true);
    track('[클릭]마이_내정보수정_닉네임');
  };

  const handleEmojiClick = () => {
    sessionStorage.setItem('previousPage', 'modifyemoji');
    navigate('/modifyemoji');
    track('[클릭]마이_내정보수정_이모지');
  };

  const handleSaveChanges = async () => {
    try {
      if (myProfileData) {
        if (selectedEmoji !== myProfileData.emoji && selectedEmoji !== null) {
          await updateEmoji({ emoji: selectedEmoji });
          sessionStorage.removeItem('selectedEmoji');
        }
        if (updatedNickname !== myProfileData.nickname) {
          await updateNickname({ nickname: updatedNickname });
        }
        setIsModified(false);
        sessionStorage.removeItem('previousPage');
        navigate('/mypage');
        track('[클릭]마이_내정보수정_저장버튼');
      }
    } catch (error) {
      alert('업데이트에 실패했습니다. 다시 시도해주세요.');
      return;
    }
  };
  return (
    <S.JoinContainer>
      <Header title="프로필 수정" />

      {isLoading ? (
        <S.LoadingContainer />
      ) : myProfileData ? (
        <>
          <S.ContentContainer>
            <S.EmojiContainer>
              <S.CircleWrap className="emoji" onClick={handleEmojiClick}>
                <S.EmojiWrap>
                  <S.TossEmoji
                    src={getImageByEmoji(selectedEmoji || '')}
                  ></S.TossEmoji>
                </S.EmojiWrap>
              </S.CircleWrap>
              <S.Text>이모지를 눌러서 바꿔보세요!</S.Text>
            </S.EmojiContainer>

            <S.ProfileContainer>
              <S.ProfileWrapper>
                <S.ProfileItems>이름</S.ProfileItems>
                <S.ProfileValues>{myProfileData.name}</S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper
                onClick={handleNicknameClick}
                style={{ cursor: 'pointer' }}
              >
                <S.ProfileItems>닉네임</S.ProfileItems>
                <S.ProfileValues className="nickname">
                  {updatedNickname}
                </S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper>
                <S.ProfileItems>학과/계열</S.ProfileItems>
                <S.ProfileValues>{myProfileData.major}</S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper>
                <S.ProfileItems>학번</S.ProfileItems>
                <S.ProfileValues>{myProfileData.studentNumber}</S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper>
                <S.ProfileItems>학년 | 나이</S.ProfileItems>
                <S.ProfileValues>
                  {mappinggrade(myProfileData.grade)}학년 | {myProfileData.age}
                  세
                </S.ProfileValues>
              </S.ProfileWrapper>
              <S.ProfileWrapper>
                <S.ProfileItems>MBTI</S.ProfileItems>
                <S.ProfileValues>{myProfileData.mbti}</S.ProfileValues>
              </S.ProfileWrapper>
            </S.ProfileContainer>

            <S.PreferContainer>
              <S.PreferWrapper>
                <S.CircleWrap>
                  <S.EmojiWrap>
                    <S.PreferValue>{myProfileData.mbti}</S.PreferValue>
                  </S.EmojiWrap>
                </S.CircleWrap>
                <S.Text>MBTI</S.Text>
              </S.PreferWrapper>

              <S.PreferWrapper>
                <S.CircleWrap>
                  <S.EmojiWrap>
                    <S.PreferValue>
                      {mappingStyle(myProfileData.style)}
                    </S.PreferValue>
                  </S.EmojiWrap>
                </S.CircleWrap>
                <S.Text>스타일</S.Text>
              </S.PreferWrapper>

              <S.PreferWrapper>
                <S.CircleWrap>
                  <S.EmojiWrap className="blue">
                    <S.PreferValue>
                      {mappingFace(myProfileData.idealType)}
                    </S.PreferValue>
                  </S.EmojiWrap>
                </S.CircleWrap>
                <S.Text>이상형</S.Text>
              </S.PreferWrapper>

              <S.PreferWrapper>
                <S.CircleWrap>
                  <S.EmojiWrap className="blue">
                    <S.PreferValue>
                      {mappingAge(myProfileData.idealAge)}
                    </S.PreferValue>
                  </S.EmojiWrap>
                </S.CircleWrap>
                <S.Text>선호나이</S.Text>
              </S.PreferWrapper>
            </S.PreferContainer>

            <S.BtnContainer>
              <S.Text>닉네임과 이모지만 변경할 수 있어요.</S.Text>
              <S.ModifyBtn
                onClick={handleSaveChanges}
                disabled={
                  myProfileData.profileStatus === 'ACTIVE' || !isModified
                }
              >
                {myProfileData.profileStatus === 'ACTIVE'
                  ? '1대1에 참여중이어서 수정할 수 없어요.'
                  : isModified
                    ? '변경사항 저장'
                    : '변경된 내용이 없어요.'}
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
        onUpdateNickname={(newNickname: SetStateAction<string>) => {
          setUpdatedNickname(newNickname);
          setIsModified(true);
        }}
      />
    </S.JoinContainer>
  );
};

export default ModifyProfile;
