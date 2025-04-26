import React from 'react';
import * as S from './Styles';
import { getchatUsers } from 'api/Chatting/GetChatUsers';
import { ChatRoomType } from 'recoilStores/type/Chatting/ChatRoomUsers';
import { getImageByEmoji } from 'utils/IconMapper';
import { useNavigate } from 'react-router-dom';

interface ChatSidebarProps {
  SideisOpen: boolean; 
  SideisClose: () => void;
  roomId: number;
  handleExitClick: () => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ SideisOpen, SideisClose, roomId ,handleExitClick}) => {
  const [chatUsers, setChatUsers] = React.useState<ChatRoomType[]>();
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchChatUsers = async () => {
      try {
        const response = await getchatUsers(roomId);
        if (response) {
          setChatUsers(response.data);
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

  const handleUserDetailClick = (nickname: string) => {
    const cleanedNickname = nickname.replace('(나)', '');
    navigate(`/chatuserdetail`, { state: { nickname: cleanedNickname } });
  }

  return (
    <>
      <S.SidebarOverlay $isOpen={SideisOpen} onClick={SideisClose} />
      <S.Sidebar $isOpen={SideisOpen} >
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
            <S.UserName onClick={() => handleUserDetailClick(profile.name)}>{profile.name}</S.UserName> 
              </S.UserItem>
          ))}
          <S.TeamName $isour={true}>{chatUsers[1].teamName} 팀</S.TeamName>
            {chatUsers[1].userProfiles.map((profile) => (
            <S.UserItem key={profile.userId}>
            <S.Avatar>
              <img src={getImageByEmoji(profile.emoji)} alt={profile.emoji} />
            </S.Avatar>  
            <S.UserName onClick={() => handleUserDetailClick(profile.name.replace('(나)', ''))}>{profile.name}</S.UserName>
              </S.UserItem>
          ))}
        </>
          )}
          </S.UserList>
            <S.ChatRoomoutContainer onClick={handleExitClick}>
            <S.Chatout />
            <S.Chatroom>채팅방나가기</S.Chatroom>
            </S.ChatRoomoutContainer>
        </S.SidebarContent>
      </S.Sidebar>
    </>
  );
};

export default ChatSidebar;
