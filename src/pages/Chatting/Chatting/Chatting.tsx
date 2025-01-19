import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import ChatHeader from '../../../components/Chatting/Chat/Header/ChatHeader';
import ChattingBox from '../../../components/Chatting/Chat/ChattingBox/ChattingBox';
import ChatInputBox from '../../../components/Chatting/Chat/Input/ChatInputBox';
import ChatSidebar from '../../../components/Chatting/Chat/Sidebar/ChatSidebar';

const Chatting = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: '학점 4.5', text: '안녕하세요!', avatar: '🏅' },
    { id: 2, user: '불멍', text: '반갑습니다!', avatar: '🔥' },
    { id: 3, user: '불멍', text: '여러 개 입력한 메시지 중 첫 번째입니다.', avatar: '🔥' },
    { id: 4, user: 'User3', text: '오늘 날씨 좋네요.', avatar: '🌞' },
    { id: 5, user: 'User3', text: '여러 개 입력한 메시지 중 첫 번째입니다.', avatar: '🌞' },
    { id: 6, user: 'User3', text: '여러 개 입력한 메시지 중 두 번째입니다.', avatar: '🌞' },
    { id: 7, user: 'User1', text: '여러 개 입력한 메시지 중 첫 번째입니다.', avatar: '🏅' },
    { id: 8, user: 'User1', text: '여러 개 입력한 메시지 중 두 번째입니다.', avatar: '🏅' },
    { id: 9, user: 'User1', text: '여러 개 입력한 메시지 중 세 번째입니다.', avatar: '🏅' },
    { id: 10, user: 'User1', text: '여러 개 입력한 메시지 중 네 번째입니다.', avatar: '🏅' },
  ]);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: 'Me', text: input, avatar: '🙂' }]);
      setInput('');
    }
  };

  const handleBackClick = () => {
    navigate(-1); 
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const uniqueUsers = Array.from(new Set(messages.filter(message => message.user !== 'Me').map(message => message.user)))
    .map(user => messages.find(message => message.user === user))
    .filter((user): user is { id: number; user: string; text: string; avatar: string } => user !== undefined);

  return (
    <S.ChattingContainer>
      <ChatHeader onBackClick={handleBackClick} onHamburgerClick={toggleSidebar} />
      <ChattingBox messages={messages} />
      <ChatInputBox 
        input={input} 
        setInput={setInput} 
        handleSend={handleSend} 
      />
      <ChatSidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        uniqueUsers={uniqueUsers} 
      />
    </S.ChattingContainer>
  );
};

export default Chatting;

