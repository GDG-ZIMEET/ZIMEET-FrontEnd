import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import * as I from '../../../assets/Icons';
import Event from 'components/MyPage/Event/Event';
import ItemShop from 'components/MyPage/ItemShop/Main/ItemShop';
import QnA from 'components/MyPage/QnA/QnA';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import useUserProfile from 'api/Authentication/useUserProfile';

const MyPage = () => {
  const navigate = useNavigate(); 
  const { userInfo, isLoading } = useUserProfile();

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
            ) : userInfo.data ? (
              <>
                <S.MyInfoContainer>
                  <S.EmojiContainer>
                    <S.CircleWrap>
                      <S.EmojiWrap>
                        <S.MyEmoji>{userInfo.emoji || '🌸'}</S.MyEmoji>
                      </S.EmojiWrap>
                    </S.CircleWrap>          
                  </S.EmojiContainer>
                  <S.MyInfo>                   
                    <S.MyNameText>{userInfo.data.name} | {userInfo.data.nickname}</S.MyNameText>
                    <S.MyInfoText>{userInfo.data.major} ∙ {userInfo.data.studentNumber} ∙ {userInfo.data.age}세</S.MyInfoText>
                    <S.MyInfoText>ZI밋 라이트 등급</S.MyInfoText>
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
        <S.WhiteArea isLoggedIn={!isLoading && userInfo.data}></S.WhiteArea>
        
        <S.ComponentContainer isLoggedIn={!isLoading && userInfo.data}>
          <Event /> 
          <ItemShop userInfo={userInfo}/>
          <QnA userInfo={userInfo}/>

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
