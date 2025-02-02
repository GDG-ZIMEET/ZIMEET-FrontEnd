import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './StylesEmoji';
import { useSetRecoilState } from 'recoil';
import { emojiState } from 'recoil/state/emojiState';

const ModifyEmoji = () => {
  const navigate = useNavigate();
  const setEmoji = useSetRecoilState(emojiState);
  const [selectedEmoji, setSelectedEmoji] = useState(null); 

  const handleBack = () => {
    navigate(-1);
  };

  const emojis = [
    '💎', '🌟', '🔥', '🍎', '🎯', '🚀', '🦄', '🍩', '🐱', '🌈',
    '🐶', '🍕', '🌸', '💡', '📚', '🎵', '⚽', '🍔', '🎮', '✈️',
    '🏀', '🍰', '🥇', '🎓', '🎁', '🚴‍♂️', '🎨', '🎹', '📸', '🕹️',
    '🎈', '📱', '💻', '🛒', '🛏️', '🏖️', '📖', '💼', '🚓', '🏡'
  ];

  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (selectedEmoji) {
      setEmoji(selectedEmoji); 
      navigate('/join2');
    } else {
      alert('이모지를 선택해주세요!'); 
    }
  };

  return (
    <S.JoinContainer>
      <S.TopBarContainer>
        <S.TopBar>
          <S.BackBtn onClick={handleBack}>&lt;</S.BackBtn>
          <S.TopBarText>이모지 선택하기</S.TopBarText>
        </S.TopBar>
      </S.TopBarContainer>

      <S.Wrapper>
        <S.EmojiContainer>
          {emojis.map((emoji, index) => (
            <S.CircleWrap
              key={index}
              onClick={() => handleSelect(emoji)}
            >
              <S.EmojiWrap isSelected={selectedEmoji === emoji}>
                <S.TossEmoji>{emoji}</S.TossEmoji>
              </S.EmojiWrap>
            </S.CircleWrap>
          ))}
        </S.EmojiContainer>

        <S.BtnContainer>
          <S.JoinBtn onClick={handleSubmit}>선택하기</S.JoinBtn> 
        </S.BtnContainer>
      </S.Wrapper>
    </S.JoinContainer>
  );
};

export default ModifyEmoji;
