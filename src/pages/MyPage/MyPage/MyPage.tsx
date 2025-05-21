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
import { getImageByEmoji } from 'utils/IconMapper';
import { authState } from '../../../recoilStores/state/authState';
import ModalWithdraw from 'components/MyPage/ModalWithdraw/ModalWithdraw';
import ModalLogout from 'components/MyPage/ModalLogout/ModalLogout';
import useLoginCheck from 'api/Authentication/useLoginCheck';
import { track } from '@amplitude/analytics-browser';
import { MyProfileResponseType } from 'recoilStores/type/MyPage/MyProfileType';
import StoreInfoButton from 'components/MyPage/StoreInfoButton/StoreInfoButton';
import { getOurHi } from 'api/Meeting/Getouthi';
import { getOnetoOneHi } from 'api/Meeting/Getouthi';
import { getRandomTicket } from 'api/Meeting/GetRandomTicket';
import { HiResponseType } from 'api/Meeting/Getouthi';
import { getOurTeam } from 'api/Meeting/GetourTeam';

const MyPage = () => {
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;
  const [myProfileData, setMyProfileData] =
    useState<MyProfileResponseType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isTeam, setIsTeam] = useState(false);
  const [OnetoOneHi, setOnetoOneHi] = useState(0);
  const [TeamHi, setTeamHi] = useState<HiResponseType | null>(null);
  const [RandomTickket, setRandomTicket] = useState(0);

  const handleWithdrawClick = () => {
    track('[클릭]마이_회원탈퇴');
    setIsWithdrawModalOpen(true);
  };

  const handleLogoutClick = () => {
    track('[클릭]마이_로그아웃');
    setIsLogoutModalOpen(true);
  };

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

  useEffect(() => {
    const fetchHiData = async () => {
      if (isLoggedIn) {
        const hiRespons = await getOnetoOneHi();
        if (hiRespons) {
          setOnetoOneHi(hiRespons.data.hi);
        } else {
          setOnetoOneHi(0);
        }
        const teamResponse = await getOurTeam('TWO_TO_TWO');
        if (teamResponse?.data) {
          setIsTeam(true);
          const teamHiResponse = await getOurHi('TWO_TO_TWO');
          if (teamHiResponse) {
            setTeamHi(teamHiResponse);
          } else {
            setTeamHi(null);
          }
        } else {
          setIsTeam(false);
        }
        const ticketResponse = await getRandomTicket();
        if (ticketResponse) {
          setRandomTicket(ticketResponse.data.ticket);
        } else {
          setRandomTicket(0);
        }
      }
    };

    fetchHiData();
  }, [isLoggedIn]);
  return (
    <S.MyPageContainer>
      <S.LogoContainer>
        <S.ZimeetLogo />
      </S.LogoContainer>

      <S.BlackContainer>
        <S.WhiteArea />
        {!isLoggedIn ? (
          <S.InfoContainer>
            <S.MyInfo>
              <b>로그인이 필요해요!</b>
              <br />
              GDG가 만든 "지금 우리 만나요, ZI밋"은 <br />
              로그인 후 이용할 수 있어요.
            </S.MyInfo>
            <S.MyMeetingContainer>
              <S.LoginBtn onClick={() => navigate('/login')}>로그인</S.LoginBtn>
              <S.LoginText>
                회원가입 <b>30초 만에</b> 끝내고 바로 <b>미팅 시작!</b>
              </S.LoginText>
            </S.MyMeetingContainer>
          </S.InfoContainer>
        ) : isLoading ? (
          <S.LoadingContainer />
        ) : (
          <S.InfoGetContainer>
            <S.MyDetailInfo>
              <S.EmojiWrap>
                <S.MyEmoji
                  src={getImageByEmoji(myProfileData?.data.emoji || '')}
                ></S.MyEmoji>
              </S.EmojiWrap>
              <S.MyDetailInfoText>
                <b>
                  {myProfileData?.data?.name || ''} |{' '}
                  {myProfileData?.data?.nickname || ''}
                </b>{' '}
                <br />
                <S.MyInfoText>
                  {myProfileData?.data?.major || ''} ∙{' '}
                  {myProfileData?.data?.studentNumber?.slice(2, 4) || ''}학번 ∙{' '}
                  {myProfileData?.data?.age || ''}세
                </S.MyInfoText>
                <S.MyInfoText>
                  {myProfileData?.data?.level === 'LIGHT'
                    ? 'ZI밋 라이트 등급'
                    : myProfileData?.data.level === 'PLUS'
                      ? 'ZI밋 플러스 등급'
                      : ''}
                </S.MyInfoText>
              </S.MyDetailInfoText>
              <S.EditMyInfo onClick={() => navigate('/modifyProfile')} />
            </S.MyDetailInfo>
            <S.MyMeetingDetailContainer>
              <S.MyMeeting>
                <S.MyMeetingTitle>하이</S.MyMeetingTitle>
                <S.MyMeetingText>1대1 미팅</S.MyMeetingText>
                <S.MeetingEmojiWrap>
                  <S.Hiblack />
                </S.MeetingEmojiWrap>
                <S.MyMeetingText>{OnetoOneHi}개</S.MyMeetingText>
              </S.MyMeeting>
              <S.MyMeeting>
                <S.MyMeetingTitle>하이</S.MyMeetingTitle>
                <S.MyMeetingText>2대2 미팅</S.MyMeetingText>
                <S.MeetingEmojiWrap>
                  <S.Hiblack />
                </S.MeetingEmojiWrap>
                <S.MyMeetingText>
                  {isTeam === false ? '팀없음' : `${OnetoOneHi}개`}
                </S.MyMeetingText>
              </S.MyMeeting>
              <S.MyMeeting>
                <S.MyMeetingTitle>티켓</S.MyMeetingTitle>
                <S.MyMeetingText>랜덤 미팅</S.MyMeetingText>
                <S.MeetingEmojiWrap>
                  <S.Ticket />
                </S.MeetingEmojiWrap>
                <S.MyMeetingText>{RandomTickket}개</S.MyMeetingText>
              </S.MyMeeting>
            </S.MyMeetingDetailContainer>
          </S.InfoGetContainer>
        )}
      </S.BlackContainer>

      <Event />
      <S.Text>
        <b>아이템 상점</b> <br />
        ZI밋 출시 기념! 오직 2025 아우름제에서만 이 가격으로!
      </S.Text>
      <Item />
      <StoreInfoButton />
      {myProfileData && <ItemShop />}
      <QnA />

      <S.OutContainer>
        <S.OutText href="/notion/personalInfoPolicy">
          개인정보처리방침
        </S.OutText>
        <S.OutText href="/notion/termsOfService">이용약관</S.OutText>
        <S.OutText className="modal" onClick={handleWithdrawClick}>
          회원탈퇴
        </S.OutText>
        <S.OutText className="modal" onClick={handleLogoutClick}>
          로그아웃
        </S.OutText>
      </S.OutContainer>

      <ModalWithdraw
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
      />
      <ModalLogout
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
      <NavigationBar />
    </S.MyPageContainer>
  );
};

export default MyPage;
