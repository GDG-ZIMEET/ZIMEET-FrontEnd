import React from 'react';
import * as S from './Styles';
import { getchatUsers } from 'api/Chatting/GetChatUsers';
import { ChatRoomType } from 'recoil/type/Chatting/ChatRoomUsers';
import { ourteamIds } from 'recoil/state/ourTeamIds';
import { useRecoilValue } from 'recoil';
import { getImageByEmoji } from 'utils/IconMapper';

interface ChatSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  roomId: number;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ isOpen, toggleSidebar, roomId }) => {
  const [chatUsers, setChatUsers] = React.useState<ChatRoomType[]>();
  const [isLoading, setIsLoading] = React.useState(true);
  const ourTeamIdsValue = useRecoilValue(ourteamIds);

  React.useEffect(() => {
    const fetchChatUsers = async () => {
      try {
        const response = await getchatUsers(roomId);
        if (response) {
          setChatUsers(response.data);
          console.log(response.data);
        } else {
          setChatUsers([]);
        }
      } catch (error) {
        console.error("chatting room 리스트 가져오기 실패:", error);
        setChatUsers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChatUsers();
  }, [roomId]);

  return (
    <>
      <S.SidebarOverlay isOpen={isOpen} onClick={toggleSidebar} />
      <S.Sidebar isOpen={isOpen}>
        <S.SidebarContent>
          <S.SidebarTitle>채팅방</S.SidebarTitle>
          <S.UserList>
          {chatUsers && (
        <>
          <S.TeamName $isour={false}>{chatUsers[0].teamName} 팀</S.TeamName>
            {chatUsers[0].userProfiles.map((profile) => (
            <S.UserItem key={profile.userId}>
            <S.Avatar>
              <img src={getImageByEmoji(profile.emoji)} alt={profile.emoji} />
            </S.Avatar> 
            <S.UserName>{profile.name}</S.UserName> 
              </S.UserItem>
          ))}
          <S.TeamName $isour={true}>{chatUsers[1].teamName} 팀</S.TeamName>
            {chatUsers[1].userProfiles.map((profile) => (
            <S.UserItem key={profile.userId}>
            <S.Avatar>
              <img src={getImageByEmoji(profile.emoji)} alt={profile.emoji} />
            </S.Avatar>  
            <S.UserName>{profile.name}</S.UserName>
              </S.UserItem>
          ))}
        </>
          )}
          </S.UserList>
          <S.ChatRoomoutContainer>
            <S.Chatout />
            <S.Chatroom>채팅방나가기</S.Chatroom>
          </S.ChatRoomoutContainer>
        </S.SidebarContent>
      </S.Sidebar>
    </>
  );
};

export default ChatSidebar;
