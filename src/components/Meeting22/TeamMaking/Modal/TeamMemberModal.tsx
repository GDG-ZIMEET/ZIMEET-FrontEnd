import React, { useState } from 'react';
import * as S from './Styles';
import { Profiles, MyProfileData } from '../Profile/ProfileData';

interface TeamMemberModalProps {
  onClose: () => void;
  onAddFriend: (friend: MyProfileData) => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ onClose, onAddFriend }) => {
  const [searchType, setSearchType] = useState('nickname');
  const [inputValue, setInputValue] = useState('');
  const [matchedFriend, setMatchedFriend] = useState<MyProfileData | null>(null);

  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(event.target.value);
    setInputValue('');
    setMatchedFriend(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const friend = Profiles.find((friend) =>
      searchType === 'nickname' ? friend.nickname === value : friend.number === value
    );

    setMatchedFriend(friend || null);
  };

  const handleAddFriend = () => {
    if (matchedFriend) {
      onAddFriend(matchedFriend);
    }
    onClose();
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.Title>같이 팀이 될 친구</S.Title>
          <S.Description>친구가 꼭 ZI밋에 가입이 되어있어야해요.</S.Description>
        </S.ModalHeader>
        <S.DropBox>
            <S.Select value={searchType} onChange={handleSearchTypeChange}>
              <option value="nickname">닉네임</option>
              <option value="phone">전화번호</option>
            </S.Select>
            <S.Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={searchType === 'nickname' ? '닉네임을 똑같이 입력해주세요.' : '전화번호를 입력해주세요.'
              }
              style={{
                backgroundColor: matchedFriend ? 'white' : '#F9FAFB',
                color: matchedFriend ? 'black' : '#8B95A1',
                border: matchedFriend ? '1px solid #00AA47' : '1px solid rgba(2, 32, 71, 0.05)',
              }}
            />
          </S.DropBox>
        {matchedFriend && (
          <>
            <S.ConfirmationText>이 친구가 맞나요?</S.ConfirmationText>
            <S.FriendInfo>
              {matchedFriend.nickname} / {matchedFriend.Major} / {matchedFriend.grade}학년 / {matchedFriend.number}
            </S.FriendInfo>
            <S.AddFriendButton onClick={handleAddFriend}>친구로 추가하기</S.AddFriendButton>
          </>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default TeamMemberModal;
