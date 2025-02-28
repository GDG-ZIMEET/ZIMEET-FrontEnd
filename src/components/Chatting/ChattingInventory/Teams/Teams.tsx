import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { getImageByEmoji } from 'utils/IconMapper';
import { getchattingRoomList } from 'api/Chatting/GetChattingRoomList';
import { ChattingRoomType } from 'recoil/type/Chatting/ChattingRoomListType';

const Teams: React.FC = () => {
  const navigate = useNavigate();
  const [chattingRoomList, setchattingRoomList] = useState<ChattingRoomType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchchattingRoomList = async () => {
      try {
        const response = await getchattingRoomList();
        if (response) {
          setchattingRoomList(response.data);
        } else {
          setchattingRoomList(null);}
      } catch (error) {
        console.error('Error fetching chatting room list:', error);
        setchattingRoomList(null);
      } finally {
        setIsLoading(false);
      }};
    fetchchattingRoomList();
  }, []);

  const handleTeamClick = (id: number) => {
    navigate(`/chatting/${id}`);
  };

  //시간계산
  const formatWriteTime = (writeTime: string) => {
    const date = new Date(writeTime);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    //오늘 날짜인 경우
    const period = hours < 12 ? '오전' : '오후';
    if (hours > 12) {
        hours -= 12; 
    } else if (hours === 0) {
        hours = 12; 
    }
    const formattedTime = `${period} ${hours}시 ${formattedMinutes}분`;
    //아닌경우 
    const formattedTimeNotToday = `${hours}:${formattedMinutes}`;

    if (isToday) {
      return formattedTime;
    } else {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}/${day} ${formattedTimeNotToday}`;
    }
  };

  return (
    <S.TeamComponent>
      {isLoading ? (
      <S.LoadingContainer />
      ) : chattingRoomList === null ? (
      <S.NoTeamsMessageContainer>
        <S.ZimeetLogo />
        <S.NoTeamsMessage>매력적인 팀을 만들어서 하이를 보내거나, <br /> 받은 하이를 수락하면 채팅방이 열려요!</S.NoTeamsMessage>
      </S.NoTeamsMessageContainer>
      ) : (
      chattingRoomList.map(team => (
        <S.Team key={team.chatRoomId.toString()} onClick={() => handleTeamClick(team.chatRoomId)}>
        <S.TeamHeader>
          <S.TeamName>{team.chatRoomName} 팀</S.TeamName>
          <S.WriteTime>{formatWriteTime(team.lastestTime)} <b>&gt;</b></S.WriteTime>
        </S.TeamHeader>
        <S.JoinMembersAndIntroduction>
          <S.JoinMembers>
          {team.userProfiles.map((profile) => (
            <S.JoinMemberBox key={profile.userId}>
            <S.JoinMember>
              <img src={getImageByEmoji(profile.emoji)} alt={profile.emoji} />
            </S.JoinMember>
            </S.JoinMemberBox>
          ))}
          </S.JoinMembers>
          <S.Introduction>{team.latestMessage}</S.Introduction>
        </S.JoinMembersAndIntroduction>
        </S.Team>
      ))
      )}
    </S.TeamComponent>
  );
};

export default Teams;
