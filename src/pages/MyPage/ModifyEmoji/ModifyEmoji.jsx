import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import * as M from 'utils/IconMapper';
import Header from 'components/Common/Header/Header/Header';

const ModifyEmoji = () => {
  const navigate = useNavigate();
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const emojis = M.getAllEmojis();

  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleSubmit = () => {
    if (selectedEmoji) {
      sessionStorage.setItem('selectedEmoji', selectedEmoji);
      navigate('/modifyprofile', { replace: true }); // 새로고침 방지
    } else {
      alert('이모지를 선택해주세요!');
    }
  };

  return (
    <S.JoinContainer>
      <Header title='이모지 선택하기' />
      <S.Wrapper>
        <S.EmojiContainer>
          {emojis.map((emoji, index) => {
            const emojiImage = M.getImageByEmoji(emoji);
            return (
              <S.CircleWrap key={index} onClick={() => handleSelect(emoji)}>
                <S.EmojiWrap $isSelected={selectedEmoji === emoji}>
                  <S.TossEmoji>
                    <img src={emojiImage} alt={emoji} />
                  </S.TossEmoji>
                </S.EmojiWrap>
              </S.CircleWrap>
            );
          })}
        </S.EmojiContainer>
        <S.BtnContainer>
          <S.JoinBtn onClick={handleSubmit}>선택하기</S.JoinBtn>
        </S.BtnContainer>
      </S.Wrapper>
    </S.JoinContainer>
  );
};

export default ModifyEmoji;
