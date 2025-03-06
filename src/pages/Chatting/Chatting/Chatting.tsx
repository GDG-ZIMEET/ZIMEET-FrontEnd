import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Styles';
import ChatHeader from '../../../components/Chatting/Chat/Header/ChatHeader';
import ChattingBox from '../../../components/Chatting/Chat/ChattingBox/ChattingBox';
import ChatInputBox from '../../../components/Chatting/Chat/Input/ChatInputBox';
import ChatSidebar from '../../../components/Chatting/Chat/Sidebar/ChatSidebar';
import { getMessages } from '../../../api/Chatting/GetMessage';
import { getMessageResponseType } from '../../../recoil/type/Chatting/MessageType';
import { connectWebSocket,sendMessage, disconnectWebSocket } from '../../../api/Chatting/WebSocketchat';
import { v4 as uuidv4 } from 'uuid';
import { authState } from 'recoil/state/authState';

const Chatting = () => {
  const location = useLocation();
  const chatRoom = location.state || null;
  const { userId } = useRecoilValue(authState);
  const [messages, setMessages] = useState<getMessageResponseType[]>([]);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
          const sortedMessages = response.sort((a, b) => new Date(a.sendAt).getTime() - new Date(b.sendAt).getTime());
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

    connectWebSocket(chatRoom.chatRoomId.toString(), (message) => {
      console.log("📩 받은 메시지 추가:", message);
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      disconnectWebSocket();
    };
  }, [chatRoom]);

  //메세지 전송
  const handleSendMessage = () => {
    if (!input.trim()) return;
    if (!chatRoom || !chatRoom.chatRoomId) return;

    const newMessage = {
      id: uuidv4(),
      type: "TALK",
      roomId: chatRoom.chatRoomId.toString(),
      senderId: userId,
      senderName: "",
      content: input,
      sendAt: new Date().toISOString(),
      emoji: "",
    };

    sendMessage(chatRoom.chatRoomId.toString(), newMessage);

  setInput("");
};

  const handleBackClick = () => {
    navigate(-1);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <S.ChattingContainer>
      <ChatHeader onBackClick={handleBackClick} onHamburgerClick={toggleSidebar} />
      {isLoading ? (
        <S.LoadingContainer />
      ) : (
        <>
          <ChattingBox messages={messages}/>
          <ChatInputBox
            input={input} 
            setInput={setInput} 
            handleSend={handleSendMessage} 
          />
          <ChatSidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={toggleSidebar} 
            roomId={chatRoom.chatRoomId}
          />
        </>
      )}
    </S.ChattingContainer>
  );
};

export default Chatting;

