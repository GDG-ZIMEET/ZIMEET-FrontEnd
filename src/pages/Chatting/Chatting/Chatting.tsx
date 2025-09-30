import { useState, useEffect, useRef, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Styles';
import ChatHeader from '../../../components/Chatting/Chat/Header/ChatHeader';
import ChattingBox from '../../../components/Chatting/Chat/ChattingBox/ChattingBox';
import ChatInputBox from '../../../components/Chatting/Chat/Input/ChatInputBox';
import ChatSidebar from '../../../components/Chatting/Chat/Sidebar/ChatSidebar';
import { getMessages } from '../../../api/Chatting/GetMessage';
import { getMessageResponseType } from '../../../recoilStores/type/Chatting/MessageType';
import websocketService from '../../../api/Chatting/WebSocketchat';
import { authState } from 'recoilStores/state/authState';
import { deleteuser } from 'api/Chatting/DeleteUser';
import ExitModal from 'components/Chatting/ExitModal/ExitModal';
import { track } from '@amplitude/analytics-browser';

const PAGE_SIZE = 20;

const Chatting = () => {
  const location = useLocation();
  const chatRoom = location.state || null;
  const { userId } = useRecoilValue(authState);
  const [messages, setMessages] = useState<getMessageResponseType[]>([]);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  const [lastMessageTime, setLastMessageTime] = useState<string | undefined>(
    undefined,
  );

  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  //채팅방 없으면 홈으로
  useEffect(() => {
    if (!chatRoom || !chatRoom.chatRoomId) {
      navigate('/chattingInventory');
    }
  }, [chatRoom, navigate]);

  //기존 메시지 조회
  const fetchMessages = useCallback(async () => {
    if (!chatRoom?.chatRoomId || isLoading || !hasMore) return;
    setIsLoading(true);

    try {
      const response = await getMessages(
        chatRoom.chatRoomId,
        PAGE_SIZE,
        lastMessageTime,
      );
      // 오래된 순으로 정렬
      const sorted = (response || []).sort(
        (a, b) => new Date(a.sendAt).getTime() - new Date(b.sendAt).getTime(),
      );
      setMessages((prev) => [...sorted, ...prev]);
      if (sorted.length > 0) {
        setLastMessageTime(sorted[0].sendAt);
        if (sorted.length < PAGE_SIZE) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('메시지 불러오기 오류:', error);
    } finally {
      setIsLoading(false);
    }
  }, [chatRoom?.chatRoomId, isLoading, lastMessageTime, hasMore]);

  // 최초 입장/방 이동시 초기화
  useEffect(() => {
    setMessages([]);
    setLastMessageTime(undefined);
    setHasMore(true);
    fetchMessages();
  }, [chatRoom?.chatRoomId]);

  // 무한 스크롤
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === 0 && !isLoading && hasMore) {
      fetchMessages();
    }
  };

  // WebSocket 연결/구독
  useEffect(() => {
    if (!chatRoom?.chatRoomId) return;
    track('[접속]채팅_실시간채팅', { roomId: chatRoom.chatRoomId, userId });
    websocketService.connect(
      chatRoom.chatRoomId,
      (message) => setMessages((prev) => [...prev, message]),
      (error) => console.error('WebSocket error:', error),
    );
    return () => {
      websocketService.disconnect();
    };
  }, [chatRoom?.chatRoomId]);

  // 메시지 보내기
  const handleSendMessage = () => {
    if (!input.trim() || !chatRoom?.chatRoomId) return;
    const newMessage = {
      type: 'TALK',
      content: input,
    };
    websocketService.sendMessage(
      `/app/chat/${chatRoom.chatRoomId}`,
      newMessage,
    );
    setInput('');
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, 50);
  };

  // 유저 나가기
  const handleUserExit = async () => {
    if (!chatRoom || !chatRoom.chatRoomId) return;
    const exitMessage = {
      type: 'EXIT',
      content: `${userId}님이 채팅방을 나갔습니다.`,
    };
    websocketService.sendMessage(
      `/app/chat/${chatRoom.chatRoomId}`,
      exitMessage,
    );
    try {
      await deleteuser(chatRoom.chatRoomId);
    } catch (error) {
      console.error('유저 삭제 실패:', error);
    }
    navigate('/chattingInventory');
  };

  const handleBackClick = () => navigate(-1);
  const SidebarOpen = () => setIsSidebarOpen(true);
  const SidebarClose = () => setIsSidebarOpen(false);
  const handleExitClick = () => {
    setIsSidebarOpen(false);
    setIsExitModalOpen(true);
  };
  const handleExitConfirm = () => {
    setIsExitModalOpen(false);
    handleUserExit();
  };
  const handleExitclose = () => setIsExitModalOpen(false);

  return (
    <S.ChattingContainer ref={containerRef}>
      <ChatHeader
        onBackClick={handleBackClick}
        chatRoomName={chatRoom.chatRoomName}
        onHamburgerClick={SidebarOpen}
      />
      {isLoading && messages.length === 0 ? (
        <S.LoadingContainer />
      ) : (
        <>
          <ChattingBox messages={messages} onScroll={handleScroll} />
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
