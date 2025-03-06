import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Styles';
import ChatHeader from '../../../components/Chatting/Chat/Header/ChatHeader';
import ChattingBox from '../../../components/Chatting/Chat/ChattingBox/ChattingBox';
import ChatInputBox from '../../../components/Chatting/Chat/Input/ChatInputBox';
import ChatSidebar from '../../../components/Chatting/Chat/Sidebar/ChatSidebar';
import { getMessages } from '../../../api/Chatting/GetMessage';
import { getMessageResponseType } from '../../../recoil/type/Chatting/MessageType';

const Chatting = () => {
  const { chatRoonId } = useParams<{ chatRoonId: string }>();
  const [messages, setMessages] = useState<getMessageResponseType[]>([]);
  const [input, setInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessages(Number(chatRoonId), 0, 15);
        if (response) {
          const sortedMessages = response.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
          setMessages(sortedMessages);
        }
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (chatRoonId) {
      fetchMessages();
    }
  }, [chatRoonId]);

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
      {isLoading ? (
        <S.LoadingContainer />
      ) : (
        <>
          <ChattingBox messages={messages} chatRoonId={chatRoonId}/>
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
        </>
      )}
    </S.ChattingContainer>
  );
};

export default Chatting;

