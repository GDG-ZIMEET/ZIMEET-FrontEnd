import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/Common/Header/Header/Header';
import { getuserProfile } from 'api/TeamMaking/GetUserProfile';
import { UserType } from 'recoilStores/type/TeamMaking/UserType';
import { useLocation } from 'react-router-dom';
import { getImageByEmoji } from 'utils/IconMapper';
import { track } from '@amplitude/analytics-browser';
import ProfileDetail from 'components/Common/Profile/ProfileDetail/ProfileDetail';
import {
  mappingMusic,
  mappingStyle,
  mappingAge,
  mappingFace,
} from 'data/SignUpData';


const ChatUserdetail = () => {
  const location = useLocation();
  const { nickname } = location.state || "";
  const [userProfile, setUserProfile] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

 
  useEffect(() => {
    track('[접속]채팅_실시간_프로필');
    const fetchUserProfile = async () => {
      try {
        const response = await getuserProfile(nickname);
        if (response) {
          setUserProfile(response.data);
        } else {
          setUserProfile(null);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setUserProfile(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserProfile();
  }, [nickname]);

  return (
    <S.UserdetailLayout>
      <Header title='돌아가기'/>
      {isLoading ? (
        <S.LoadingContainer />
      ) : userProfile ? (
        <> 
          <S.Avatar>
            <img src={getImageByEmoji(userProfile.emoji)} alt={userProfile.emoji} />
          </S.Avatar>
          <S.UserInfo $isMusic={false}><b>{userProfile.nickname}</b> | {userProfile.age}세 ({userProfile.studentNumber}학번)</S.UserInfo>
          <S.UserInfo $isMusic={false}>{userProfile.major}</S.UserInfo>
          <S.UserInfo $isMusic={true}>{mappingMusic(userProfile.music)}</S.UserInfo>

          <S.Title>추가 정보를 알려드려요!</S.Title>
            {userProfile.level === 'LIGHT'? (
              <S.PremiumOverlay>
                <S.PremiumText>
                  <b>지밋+등급</b>이 되면 볼 수 있어요.<br/>
                  '마이' 탭에서 오직 <b>아우름제에만 1,900원</b>으로!
                </S.PremiumText>
              </S.PremiumOverlay>
            ) : (
              <S.UserContainer>
              <ProfileDetail label="MBTI" value={userProfile.mbti} gender={userProfile.gender} ischat={true}/>
              <ProfileDetail label="스타일" value={mappingStyle(userProfile.style)} gender={userProfile.gender} ischat={true}/>
              </S.UserContainer>
            )}
            <S.Title>{userProfile.nickname}의 이상형은?</S.Title>
            {userProfile.level === 'LIGHT'? (
              <S.PremiumOverlay>
                <S.PremiumText>
                  <b>지밋+등급</b>이 되면 볼 수 있어요.<br/>
                  '마이' 탭에서 오직 <b>아우름제에만 1,900원</b>으로!
                </S.PremiumText>
              </S.PremiumOverlay>

            ) : (
              <S.UserContainer>
              <ProfileDetail label="이상형" value={mappingFace(userProfile.idealType)} gender={userProfile.gender} ischat={true}/>
              <ProfileDetail label="선호나이" value={mappingAge(userProfile.idealAge)} gender={userProfile.gender} ischat={true}/>
              </S.UserContainer>
            )}
        </>
      ) : (
        <p>User profile not found.</p>
      )}
    </S.UserdetailLayout>
  );
};

export default ChatUserdetail;
