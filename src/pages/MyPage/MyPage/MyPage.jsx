import * as S from './Styles';
import * as I from '../../../assets/Icons';
import Event from 'components/MyPage/Event/Event';
import ItemShop from 'components/MyPage/ItemShop/Main/ItemShop';
import QnA from 'components/MyPage/QnA/QnA';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import { NavBarContainer } from 'components/NavigationBar/Styles';

const MyPage = () => {
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
                <S.MyInfoContainer>
                    <S.EmojiContainer>
                        <S.CircleWrap>
                            <S.EmojiWrap>
                                <S.MyEmoji>🌸</S.MyEmoji>
                            </S.EmojiWrap>
                        </S.CircleWrap>
                    </S.EmojiContainer>

                    <S.MyInfo>
                        <S.MyNameText>장세연 | 벚꽃</S.MyNameText>
                        <S.MyInfoText>미디어기술콘텐츠학과 ∙ 21학번 ∙ 24세</S.MyInfoText>
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
                                <S.MeetingIcons>🎫</S.MeetingIcons>
                            </S.MeetingEmojiWrap>
                        </S.MeetingCircleWrap>
                        <S.MyMeetingText>1개</S.MyMeetingText>
                    </S.MyMeeting>
                </S.MyMeetingContainer>
            </S.InfoContainer>
        </S.BlackContainer>
        <S.WhiteArea></S.WhiteArea>

        <S.ComponentContainer>
            <Event /> 
            <ItemShop />
            <QnA />

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