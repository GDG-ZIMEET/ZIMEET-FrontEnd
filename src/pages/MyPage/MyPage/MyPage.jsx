import * as S from './Styles';
import * as I from '../../../assets/Icons';
import Event from 'components/MyPage/Event/Event';
import ItemShop from 'components/MyPage/ItemShop/Main/ItemShop';
import QnA from 'components/MyPage/QnA/QnA';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import { useEffect, useState } from 'react';
import { getmyProfile } from 'api/MyPage/GetmyProfile';
import { useNavigate } from 'react-router-dom';
import {getImageByEmoji} from 'utils/IconMapper';

const MyPage = () => {
  const [myProfileData, setMyProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
    <S.MyPageContainer>
      <S.MyPageBox>
        <S.LogoContainer>
          <S.Logo>
            <I.ZimeetLogo />
          </S.Logo>
        </S.LogoContainer>

        <S.BlackContainer>
          <S.InfoContainer>
            {isLoading ? (
              <>
                <S.MyInfoContainer>
                    <S.MyInfo>                   
                    <S.MyNameText>로딩중입니다</S.MyNameText>
                    </S.MyInfo>
                </S.MyInfoContainer>
              </>
            ) : myProfileData ? (
              <>
                <S.MyInfoContainer>
                  <S.EmojiContainer>
                    <S.CircleWrap>
                      <S.EmojiWrap>
                        <S.MyEmoji src={getImageByEmoji(myProfileData.data.emoji)}></S.MyEmoji>
                      </S.EmojiWrap>
                    </S.CircleWrap>          
                  </S.EmojiContainer>
                  <S.MyInfo>                   
                    <S.MyNameText>{myProfileData.data.name} | {myProfileData.data.nickname}</S.MyNameText>
                    <S.MyInfoText>{myProfileData.data.major} ∙ {myProfileData.data.studentNumber} ∙ {myProfileData.data.age}세</S.MyInfoText>
                    <S.MyInfoText>{myProfileData.data.level === 'LIGHT' ? 'ZI밋 라이트 등급' : myProfileData.data.level === 'PLUS' ? 'ZI밋 플러스 등급' : ''}</S.MyInfoText>
                  </S.MyInfo>
                  <S.MyInfoModifyWrapper>
                     <I.EditMyInfo />
                  </S.MyInfoModifyWrapper>
                </S.MyInfoContainer>
                
                <S.MyMeetingContainer>
                  <S.MyMeeting>
                    <S.MyMeetingTitle>하이</S.MyMeetingTitle>
                    <S.MyMeetingText>2대2 미팅</S.MyMeetingText>
                    <S.MeetingCircleWrap>
                        <S.MeetingEmojiWrap>
                            <S.MeetingIcons></S.MeetingIcons>
                        </S.MeetingEmojiWrap>
                    </S.MeetingCircleWrap>
                    <S.MyMeetingText>2개</S.MyMeetingText>
                  </S.MyMeeting>

                  <S.MyMeeting>
                    <S.MyMeetingTitle>하이</S.MyMeetingTitle>
                    <S.MyMeetingText>3대3 미팅</S.MyMeetingText>
                    <S.MeetingCircleWrap>
                      <S.MeetingEmojiWrap>
                          <S.MeetingIcons></S.MeetingIcons>
                      </S.MeetingEmojiWrap>
                    </S.MeetingCircleWrap>
                    <S.MyMeetingText>팀 없음</S.MyMeetingText>
                  </S.MyMeeting>

                  <S.MyMeeting>
                    <S.MyMeetingTitle>티켓</S.MyMeetingTitle>
                    <S.MyMeetingText>랜덤 미팅</S.MyMeetingText>
                    <S.MeetingCircleWrap>
                      <S.MeetingEmojiWrap>
                          <I.Ticket />
                      </S.MeetingEmojiWrap>
                    </S.MeetingCircleWrap>
                    <S.MyMeetingText>1개</S.MyMeetingText>
                  </S.MyMeeting>
                </S.MyMeetingContainer>
              </>
            ) : (
              <>
                <S.MyInfoContainer>
                  <S.MyInfo className='loggedOut'>
                    <S.MyNameText>로그인이 필요해요!</S.MyNameText>
                    <S.MyInfoText>GDG가 만든 지금 우리 만나요, ZI밋'은</S.MyInfoText>
                    <S.MyInfoText>로그인 후 이용할 수 있어요.</S.MyInfoText>
                  </S.MyInfo>
                </S.MyInfoContainer>  
                <S.MyMeetingContainer className='loggedOut'>
                  <S.LoginBtn onClick={() => navigate('/login')}>로그인</S.LoginBtn>
                  <S.LoginText>회원가입 <S.BoldText>30초 만에</S.BoldText> 끝내고 바로 <S.BoldText>미팅 시작!</S.BoldText></S.LoginText>
                </S.MyMeetingContainer>
              </>
            )}
          </S.InfoContainer>
        </S.BlackContainer>
        <S.WhiteArea isLoggedIn={!isLoading && myProfileData}></S.WhiteArea>

        <S.ComponentContainer isLoggedIn={!isLoading && myProfileData}>
          <Event />
          <ItemShop myProfileData={myProfileData} />
          <QnA myProfileData={myProfileData}/>

          <S.OutContainer>
            <S.OutText href='/'>개인정보처리방침</S.OutText>
            <S.OutText href='/'>이용약관</S.OutText>
            <S.OutText href='/'>회원탈퇴</S.OutText>
            <S.OutText href='/'>로그아웃</S.OutText>
          </S.OutContainer>
        </S.ComponentContainer>
      </S.MyPageBox>
      <NavigationBar />
    </S.MyPageContainer>
  );
};

export default MyPage;
