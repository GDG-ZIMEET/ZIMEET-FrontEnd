import * as S from './Styles';
import { useRecoilValue } from 'recoil';
import Event from 'components/MyPage/Event/Event';
import ItemShop from 'components/MyPage/ItemShop/Main/ItemShop';
import QnA from 'components/MyPage/QnA/QnA';
import Item from 'components/MyPage/Item/Item';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import { useEffect, useState } from 'react';
import { getmyProfile } from 'api/Mypage/GetmyProfile';
import { useNavigate } from 'react-router-dom';
import {getImageByEmoji} from 'utils/IconMapper';
import { authState } from '../../../recoil/state/authState';
import ModalWithdraw from 'components/MyPage/ModalWithdraw/ModalWithdraw';
import ModalLogout from 'components/MyPage/ModalLogout/ModalLogout';
import useLoginCheck from 'api/Authentication/useLoginCheck';

const MyPage = () => {
  useLoginCheck(); 

  const { userId, isAuthenticated: isLoggedIn } = useRecoilValue(authState);
  const [myProfileData, setMyProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleWithdrawClick =()=> {
    setIsWithdrawModalOpen(true);
  }

  const handleLogoutClick =()=> {
    setIsLogoutModalOpen(true);
  }

  useEffect(() => {
    sessionStorage.removeItem('previousPage');
    sessionStorage.removeItem('selectedEmoji');
    
    const fetchMyProfile = async () => {
      if (!isLoggedIn) {
        setMyProfileData(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        if (isLoggedIn) {
          const response = await getmyProfile();
          setMyProfileData(response || null);
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
  }, [isLoggedIn]);

  return (
    <S.MyPageContainer>
        <S.LogoContainer>
            <S.ZimeetLogo />
        </S.LogoContainer>

        <S.BlackContainer>
          <S.WhiteArea />
          { myProfileData === null ? (
          <S.InfoContainer>
            <S.MyInfo >
              <b>로그인이 필요해요!</b><br />
              GDG가 만든 '지금 우리 만나요, ZI밋'은 <br />
              로그인 후 이용할 수 있어요.
            </S.MyInfo>
            <S.MyMeetingContainer>
              <S.LoginBtn onClick={() => navigate('/login')}>로그인</S.LoginBtn>
              <S.LoginText>회원가입 <b>30초 만에</b> 끝내고 바로 <b>미팅 시작!</b></S.LoginText>
            </S.MyMeetingContainer>
          </S.InfoContainer>
          ) : (
            isLoading ? (
              <S.LoadingContainer />
            ) : (
              <S.InfoGetContainer>
                <S.MyDetailInfo >
                  <S.EmojiWrap>
                      <S.MyEmoji src={getImageByEmoji(myProfileData.data.emoji)}></S.MyEmoji>
                  </S.EmojiWrap>
                  <S.MyDetailInfoText>
                      <b>{myProfileData.data.name} | {myProfileData.data.nickname}</b> <br />
                      <S.MyInfoText>{myProfileData.data.major} ∙ {myProfileData.data.studentNumber.slice(2, 4)}학번 ∙ {myProfileData.data.age}세</S.MyInfoText>
                      <S.MyInfoText>{myProfileData.data.level === 'LIGHT' ? 'ZI밋 라이트 등급' : myProfileData.data.level === 'PLUS' ? 'ZI밋 플러스 등급' : ''}</S.MyInfoText>
                  </S.MyDetailInfoText>
                  <S.EditMyInfo onClick={() => navigate('/modifyProfile')} />
                </S.MyDetailInfo>
                <S.MyMeetingDetailContainer>
                  <S.MyMeeting>
                    <S.MyMeetingTitle>하이</S.MyMeetingTitle>
                    <S.MyMeetingText>2대2 미팅</S.MyMeetingText>
                    <S.MeetingEmojiWrap>
                        <S.Hiblack />
                    </S.MeetingEmojiWrap>
                    <S.MyMeetingText>무제한</S.MyMeetingText>
                  </S.MyMeeting>
                  <S.MyMeeting>
                      <S.MyMeetingTitle>하이</S.MyMeetingTitle>
                      <S.MyMeetingText>3대3 미팅</S.MyMeetingText>
                      <S.MeetingEmojiWrap>
                          <S.Hiblack />
                      </S.MeetingEmojiWrap>
                      <S.MyMeetingText>무제한</S.MyMeetingText>
                  </S.MyMeeting>
                  <S.MyMeeting>
                      <S.MyMeetingTitle>티켓</S.MyMeetingTitle>
                      <S.MyMeetingText>랜덤 미팅</S.MyMeetingText>
                      <S.MeetingEmojiWrap>
                          <S.Ticket />
                      </S.MeetingEmojiWrap>
                      <S.MyMeetingText>무제한</S.MyMeetingText>
                  </S.MyMeeting>
                </S.MyMeetingDetailContainer>
              </S.InfoGetContainer>
          ))
        }
        </S.BlackContainer>
       
        <Event />
        <S.Text>
          <b>아이템 상점</b> <br/>
          ZI밋 출시 기념! 오직 2025 늘품제에서만 이 가격으로!
        </S.Text>
        <Item />
        {myProfileData && ( <ItemShop />)}
        <QnA myProfileData={myProfileData}/>

        <S.OutContainer>
          <S.OutText href='/notion/personalInfoPolicy'>개인정보처리방침</S.OutText>
          <S.OutText href='/notion/termsOfService'>이용약관</S.OutText>
          <S.OutText className='modal' onClick={handleWithdrawClick} >회원탈퇴</S.OutText>
          <S.OutText className='modal' onClick={handleLogoutClick}>로그아웃</S.OutText>
        </S.OutContainer>
    
      <ModalWithdraw isOpen={isWithdrawModalOpen} onClose={() => setIsWithdrawModalOpen(false)} />
      <ModalLogout isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)} />
      <NavigationBar />
    </S.MyPageContainer>
  );
};

export default MyPage;
