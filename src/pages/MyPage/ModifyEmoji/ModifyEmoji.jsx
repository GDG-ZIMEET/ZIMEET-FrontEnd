import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import * as M from 'utils/IconMapper';
import { updateEmoji } from 'api/Mypage/UpdateEmoji';
import Header from 'components/Common/Header/Header/Header';

const ModifyEmoji = () => {
  const navigate = useNavigate();
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const emojis = M.getAllEmojis();

  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji); 
  };


  useEffect(() => {
    console.log("현재 선택된 이모지:", selectedEmoji);
  }, [selectedEmoji]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // console.log("response data:", JSON.stringify({ emoji: selectedEmoji })); 
  
    if (selectedEmoji) {
      setIsLoading(true);
      try {
        const response = await updateEmoji({ emoji: selectedEmoji }); 
        // console.log("서버 응답:", response); 
        if (response) {
          alert('이모지가 성공적으로 업데이트되었습니다.');
          navigate('/modifyprofile');
        } else {
          alert('이모지 업데이트에 실패했습니다. 다시 시도해주세요.');
        }
      } catch (error) {
        // console.error("에러:", error.response?.data || error.message); 
        alert('서버 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
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
              <S.CircleWrap
                key={index}
                onClick={() => handleSelect(emoji)}
              >
                <S.EmojiWrap isSelected={selectedEmoji === emoji}>
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
