import React from 'react';
import * as S from './Styles';

interface ChatInputBoxProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  handleInputFocus: () => void;
}

const ChatInputBox: React.FC<ChatInputBoxProps> = ({ input, setInput, handleSend, handleInputFocus }) => {
  return (
    <S.InputContainer>
      <S.ChatInput
        placeholder="메시지를 입력해주세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={handleInputFocus} 
      />
      <S.SendButton onClick={handleSend}>
        <S.ChattingButton />
      </S.SendButton>
    </S.InputContainer>
  );
};

export default ChatInputBox;
