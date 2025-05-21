import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { getImageByEmoji } from 'utils/IconMapper';
import { getchattingRoomList } from 'api/Chatting/GetChattingRoomList';
import { ChattingRoomType } from 'recoilStores/type/Chatting/ChattingRoomListType';
import {
  connectWebSocket,
  disconnectWebSocket,
} from 'api/Chatting/WebSocketchat';
import { ourteamIds } from 'recoilStores/state/ourTeamIds';
import { useRecoilValue } from 'recoil';
import { track } from '@amplitude/analytics-browser';

const Teams: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;
  const [chattingRoomList, setchattingRoomList] = useState<
    ChattingRoomType[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const isourteam = useRecoilValue(ourteamIds);

  useEffect(() => {
    setIsLoading(true);
    const fetchChattingRoomList = async () => {
      try {
        const response = await getchattingRoomList();
        if (response) {
          const sortedRooms = response.data.sort(
            (a, b) =>
              new Date(b.lastestTime || 0).getTime() -
              new Date(a.lastestTime || 0).getTime(),
          );
          setchattingRoomList(sortedRooms);
        } else {
          setchattingRoomList([]);
        }
      } catch (error) {
        console.error('chatting room 리스트 가져오기 실패:', error);
        setchattingRoomList([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChattingRoomList();

    return () => {
      disconnectWebSocket();
    };
  }, []);

  //WebSocket 채팅방 목록 업데이트
  useEffect(() => {
    if (isourteam === null) return;
    connectWebSocket('all_rooms', (message) => {
      setchattingRoomList((prevRooms) => {
        const updatedRooms = (prevRooms || []).map((room) =>
          room.chatRoomId === message.roomId
            ? {
                ...room,
                latestMessage: message.content,
                lastestTime: message.sendAt,
              }
            : room,
        );

        // 최신 메시지 기준으로 정렬
        return [...updatedRooms].sort(
          (a, b) =>
            new Date(b.lastestTime || 0).getTime() -
            new Date(a.lastestTime || 0).getTime(),
        );
      });
    });

    return () => {
      disconnectWebSocket();
    };
  }, []);

  //팀 클릭시 채팅방으로 이동
  const handleTeamClick = (team: ChattingRoomType) => {
    navigate(`/chatting/${team.chatRoomId}`, { state: team });
    track('[클릭]채팅_채팅목록_팀', {
      chatRoomId: team.chatRoomId,
    });
  };

  //시간계산
  const formatWriteTime = (writeTime: string) => {
    const date = new Date(writeTime);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const period = hours < 12 ? '오전' : '오후';
    if (hours > 12) hours -= 12;
    else if (hours === 0) hours = 12;
    const formattedTime = `${period} ${hours}시 ${formattedMinutes}분`;
    const formattedTimeNotToday = `${hours}:${formattedMinutes}`;
    return isToday
      ? formattedTime
      : `${date.getMonth() + 1}/${date.getDate()} ${formattedTimeNotToday}`;
  };

  return (
    <S.TeamComponent>
      {!isLoggedIn || chattingRoomList?.length === 0 ? (
        <S.NoTeamsMessageContainer>
          <S.ZimeetLogo />
          <S.NoTeamsMessage>
            1대1 혼자 또는 2대2 팀으로 하이를 보내거나,
            <br /> 받은 하이를 수락하면 채팅방이 열려요!
          </S.NoTeamsMessage>
        </S.NoTeamsMessageContainer>
      ) : isLoading ? (
        <S.LoadingContainer />
      ) : (
        chattingRoomList?.map((team) => (
          <S.Team
            key={team.chatRoomId.toString()}
            onClick={() => handleTeamClick(team)}
          >
            <S.JoinMembersAndIntroduction>
              <S.JoinMembers>
                {team.userProfiles.map((profile) => (
                  <S.JoinMemberBox key={profile.userId}>
                    <S.JoinMember>
                      <img
                        src={getImageByEmoji(profile.emoji)}
                        alt={profile.emoji}
                      />
                    </S.JoinMember>
                  </S.JoinMemberBox>
                ))}
              </S.JoinMembers>
              <S.ChatInfoContainer>
                <S.TeamHeader>
                  <S.TeamName>
                    {team.chatRoomName}{' '}
                    {team.userProfiles.length === 1 ? '' : '팀'}
                  </S.TeamName>
                  <S.WriteTime>{formatWriteTime(team.lastestTime)}</S.WriteTime>
                </S.TeamHeader>
                <S.Introduction>{team.latestMessage}</S.Introduction>
              </S.ChatInfoContainer>
            </S.JoinMembersAndIntroduction>
          </S.Team>
        ))
      )}
    </S.TeamComponent>
  );
};

export default Teams;
