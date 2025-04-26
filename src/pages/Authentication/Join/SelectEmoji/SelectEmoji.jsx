import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { useSetRecoilState } from 'recoil';
import { joinState } from 'recoilStores/state/joinState';
import { getAllIcons } from '../../../../utils/IconMapper';
import Header from '../../../../components/Authentication/Join/SelectEmoji/Header/Header';
import { track } from '@amplitude/analytics-browser';

const SelectEmoji = () => {
  const navigate = useNavigate();
  const setJoinData = useSetRecoilState(joinState);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji);
    track('[클릭]회원가입_두번째_이모지목록_이모지선택', {
      'emoji': emoji
    });
  };

  const handleSubmit = () => {
    if (selectedEmoji) {
      track('[클릭]회원가입_두번째_이모지목록_다음버튼', {
        emoji: selectedEmoji
      });
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
