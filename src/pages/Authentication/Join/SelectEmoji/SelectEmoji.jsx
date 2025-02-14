import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { useSetRecoilState } from 'recoil';
import { joinState } from 'recoil/state/joinState';
import { getAllIcons } from '../../../../utils/IconMapper';
import Header from '../../../../components/Authentication/Join/SelectEmoji/Header/Header';

const SelectEmoji = () => {
  const navigate = useNavigate();
  const setJoinData = useSetRecoilState(joinState);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji); 
  };

  const handleSubmit = () => {
    if (selectedEmoji) {
      setJoinData((prev) => ({ ...prev, emoji: selectedEmoji }));
      navigate('/join2'); 
    } else {
      alert('이모지를 선택해주세요!'); 
    }
  };

  return (
    <S.JoinLayout>
      <Header />
      <S.EmojiContainer>
        {getAllIcons().map(([emoji, emojiImage], index) => (
          <S.CircleWrap key={index} onClick={() => handleSelect(emoji)}>
            <S.EmojiWrap $isSelected={selectedEmoji === emoji}>
              <S.TossEmoji>
                <img src={emojiImage} alt={emoji} />
              </S.TossEmoji>
            </S.EmojiWrap>
          </S.CircleWrap>
        ))}
      </S.EmojiContainer>

      <S.BtnContainer>
        <S.JoinBtn onClick={handleSubmit}>선택하기</S.JoinBtn> 
      </S.BtnContainer>
    </S.JoinLayout>
  );
};

export default SelectEmoji;
