import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Styles';
import ChatHeader from '../../../components/Chatting/Chat/Header/ChatHeader';
import ChattingBox from '../../../components/Chatting/Chat/ChattingBox/ChattingBox';
import ChatInputBox from '../../../components/Chatting/Chat/Input/ChatInputBox';
import ChatSidebar from '../../../components/Chatting/Chat/Sidebar/ChatSidebar';
import { getMessages } from '../../../api/Chatting/GetMessage';
import { getMessageResponseType } from '../../../recoilStores/type/Chatting/MessageType';
import {
  connectWebSocket,
  sendMessage,
  disconnectWebSocket,
} from '../../../api/Chatting/WebSocketchat';
import { v4 as uuidv4 } from 'uuid';
import { authState } from 'recoilStores/state/authState';
import { deleteuser } from 'api/Chatting/DeleteUser';
import ExitModal from 'components/Chatting/ExitModal/ExitModal';
import { track } from '@amplitude/analytics-browser';

const Chatting = () => {
  const location = useLocation();
  const chatRoom = location.state || null;
  const { userId } = useRecoilValue(authState);
  const [messages, setMessages] = useState<getMessageResponseType[]>([]);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const navigate = useNavigate();

  //채팅방 없으면 홈으로
  useEffect(() => {
    if (!chatRoom || !chatRoom.chatRoomId) {
      navigate('/chattingInventory');
    }
  }, [chatRoom, navigate]);

  //기존 메시지 조회
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessages(Number(chatRoom.chatRoomId), 0, 15);
        if (response) {
          const sortedMessages = response.sort(
            (a, b) =>
              new Date(a.sendAt).getTime() - new Date(b.sendAt).getTime(),
          );
          setMessages(sortedMessages);
        }
      } catch (error) {
        console.error('메시지 불러오기 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (chatRoom.chatRoomId) {
      fetchMessages();
    }
  }, [chatRoom.chatRoomId]);

  //소켓연결
  useEffect(() => {
    if (!chatRoom || !chatRoom.chatRoomId) return;
    track('[접속]채팅_실시간채팅', { roomId: chatRoom.chatRoomId, userId });

    connectWebSocket(chatRoom.chatRoomId.toString(), (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      disconnectWebSocket();
      track('[퇴장]채팅_실시간채팅', { roomId: chatRoom.chatRoomId, userId });
    };
  }, [chatRoom.chatRoomId]);

  //메세지 전송
  const handleSendMessage = () => {
    if (!input.trim()) return;
    if (!chatRoom || !chatRoom.chatRoomId) return;

    const newMessage = {
      id: uuidv4(),
      type: 'TALK',
      roomId: chatRoom.chatRoomId.toString(),
      senderId: userId,
      senderName: '',
      content: input,
      sendAt: new Date().toISOString(),
      emoji: '',
    };

    sendMessage(chatRoom.chatRoomId.toString(), newMessage);

    track('[전송]채팅_실시간채팅_채팅메시지', {
      roomId: chatRoom.chatRoomId,
      userId,
      content: input,
    });

    setInput('');
  };

  const handleUserExit = async () => {
    if (!chatRoom || !chatRoom.chatRoomId) return;

    const exitMessage = {
      id: uuidv4(),
      type: 'EXIT',
      roomId: chatRoom.chatRoomId.toString(),
      senderId: userId,
      senderName: '',
      content: `${userId}님이 채팅방을 나갔습니다.`,
      sendAt: new Date().toISOString(),
      emoji: '',
    };

    sendMessage(chatRoom.chatRoomId.toString(), exitMessage);

    try {
      await deleteuser(chatRoom.chatRoomId);
    } catch (error) {
      console.error('유저 삭제 실패:', error);
    }

    navigate('/chattingInventory');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const SidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const SidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleExitClick = () => {
    setIsSidebarOpen(false);
    setIsExitModalOpen(true);
  };

  const handleExitConfirm = () => {
    setIsExitModalOpen(false);
    handleUserExit();
  };

  const handleExitclose = () => {
    setIsExitModalOpen(false);
  };

  return (
    <S.ChattingContainer>
      <ChatHeader
        onBackClick={handleBackClick}
        chatRoomName={chatRoom.chatRoomName}
        onHamburgerClick={SidebarOpen}
      />
      {isLoading ? (
        <S.LoadingContainer />
      ) : (
        <>
          <ChattingBox messages={messages} />
          <ChatInputBox
            input={input}
            setInput={setInput}
            handleSend={handleSendMessage}
          />
          <ChatSidebar
            SideisOpen={isSidebarOpen}
            SideisClose={SidebarClose}
            roomId={chatRoom.chatRoomId}
            handleExitClick={handleExitClick}
          />
          {isExitModalOpen && (
            <ExitModal isout={handleExitConfirm} isclose={handleExitclose} />
          )}
        </>
      )}
    </S.ChattingContainer>
  );
};

export default Chatting;
