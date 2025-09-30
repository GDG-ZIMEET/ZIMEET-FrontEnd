import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { getImageByEmoji } from 'utils/IconMapper';
import { getchattingRoomList } from 'api/Chatting/GetChattingRoomList';
import { ChattingRoomType } from 'recoilStores/type/Chatting/ChattingRoomListType';
import websocketRoomService from 'api/Chatting/WebSocketRoomServer';
import { OurTwoToTwoState } from 'recoilStores/state/Meeting/MyProfileState';
import { useRecoilValue } from 'recoil';
import { track } from '@amplitude/analytics-browser';
import { on } from 'events';

import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
const baseURL = import.meta.env.VITE_APP_SOCKET_URL;
const token = localStorage.getItem('accessToken');
let stompClient: Client | null = null;

function sortRooms(rooms: ChattingRoomType[]) {
  return rooms.sort(
    (a, b) =>
      new Date(b.lastestTime || 0).getTime() -
      new Date(a.lastestTime || 0).getTime(),
  );
}

const Teams: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;
  const [chattingRoomList, setChattingRoomList] = useState<ChattingRoomType[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const isourteam = useRecoilValue(OurTwoToTwoState);

  //api로 최초 채팅방 리스트 불러오기
  useEffect(() => {
    setIsLoading(true);
    getchattingRoomList()
      .then((response) => {
        if (response && response.data) {
          setChattingRoomList(sortRooms(response.data));
        } else {
          setChattingRoomList([]);
        }
      })
      .catch((error) => {
        console.error('chatting room 리스트 가져오기 실패:', error);
        setChattingRoomList([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  //WebSocket 채팅방 목록 업데이트
  useEffect(() => {
    if (chattingRoomList.length === 0) return;

    websocketRoomService.connect(
      chattingRoomList.map((room) => ({
        ...room,
        chatRoomId: room.chatRoomId.toString(),
      })),
      (msg) => {
        setChattingRoomList((prevRooms) => {
          const filtered = prevRooms.filter((r) => r.chatRoomId !== msg.roomId);
          const updated = [
            {
              ...(filtered.find((r) => r.chatRoomId === msg.roomId) || {}),
              latestMessage: msg.content,
              lastestTime: msg.sendAt,
              chatRoomId: msg.roomId,
              chatRoomName: msg.chatRoomName,
              userProfiles: msg.userProfiles ?? [],
            },
            ...filtered,
          ];
          return sortRooms(updated);
        });
      },
      () => {
        track('[접속]웹소켓_채팅', { roomCount: chattingRoomList.length });
      },
    );

    return () => {
      websocketRoomService.disconnect();
    };
  }, [chattingRoomList]);

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
