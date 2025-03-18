import React, { useState } from 'react';
import * as S from './Styles';
import { getSearchTeamMember } from 'api/TeamMaking/GetSearchTeamMembers';
import { SearchTeamMemberType } from 'recoil/type/TeamMaking/SearchTeamMember';
import { mappinggrade } from 'data/SignUpData';

interface TeamMemberModalProps {
  onClose: () => void;
  onAddFriend: (friend:  SearchTeamMemberType) => void;
  teamType: string;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ onClose, onAddFriend,  teamType }) => {
  const [searchType, setSearchType] = useState('nickname');
  const [selectUser, setSelectUser] = useState<SearchTeamMemberType | null>(null);
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchUsers, setSearchUsers] = useState<SearchTeamMemberType[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = async () => {
    try {
      setSearchUsers([]);
      const response = await getSearchTeamMember( teamType, nickname, phoneNumber);
      if (response && Array.isArray(response.data.searchList)) {
        setSearchUsers(response.data.searchList);
      } else {
        setSearchUsers([]); 
      }
    } catch (error) {
      console.error('Error fetching search team member data:', error);
      setSearchUsers([]); 
    }
  };

  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(event.target.value);
    setInputValue('');
    setNickname('');
    setPhoneNumber('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  
    if (searchType === 'nickname') {
      setNickname(event.target.value);
    } else {
      setPhoneNumber(event.target.value);
    }
  };
  

  const handleSelectTeamMember = (member: SearchTeamMemberType) => {
    setSelectUser(member); 
  };

  const handleAddFriend = () => {
    if (selectUser) {
      onAddFriend(selectUser);
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
                backgroundColor: searchUsers ? 'white' : '#F9FAFB',
                color: searchUsers ? 'black' : '#8B95A1',
                border: searchUsers ? '1px solid #00AA47' : '1px solid rgba(2, 32, 71, 0.05)',
              }}
            />
            {inputValue && (
            <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
            )}
          </S.DropBox>
          {searchUsers.length > 0 ? (
          <>
            <S.ConfirmationText>이 친구가 맞나요?</S.ConfirmationText>
            <S.SearchUserList>
              {searchUsers.map((user) => (
                <S.FriendInfo
                  key={user.userId}
                  $isSelected={selectUser?.userId === user.userId}
                  onClick={() => handleSelectTeamMember(user)}>
                  {user.nickname} / {user.major} / {mappinggrade(user.grade)}학년 / {user.phoneNumber}
                </S.FriendInfo>))}
            </S.SearchUserList>
            <S.AddFriendButton onClick={handleAddFriend}>친구로 추가하기</S.AddFriendButton>
          </>
          ) : (
            <p/>
          )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default TeamMemberModal;
