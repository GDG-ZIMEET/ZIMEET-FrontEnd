import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import { getOurHi } from '../../../../api/Meeting/Getouthi';
import { postsendHi } from '../../../../api/Hi/PostsendHi';
import { useRecoilValue } from 'recoil';
import { ourteamIds } from 'recoil/state/ourTeamIds';
import { track } from '@amplitude/analytics-browser';

interface SendQuestionProps {
  onClose: () => void;
  onConfirm: () => void;
  teamName: string;
  teamId: number;
  teamType: string;
}

const SendQuestion: React.FC<SendQuestionProps> = ({ onClose, onConfirm, teamName, teamId, teamType }) => {  
  const [hiCount, setHiCount] = useState(0);
  const ourTeamIdsValue = useRecoilValue(ourteamIds);

  useEffect(() => {
    const fetchHiCount = async () => {
      try {
        const response = await getOurHi(teamType);
        if (response) {
          setHiCount(response.data.hi);
        } else {
          setHiCount(0);
        }
      } catch (error) {
        console.error('Error fetching hi count:', error);
        setHiCount(0);
      }
    };
    fetchHiCount();
    track('[접속]미팅_팀_하이보내기')
  }, [teamType]);

  const sendHi = async () => {
    try {
      if (ourTeamIdsValue) {
        const fromId = teamType === 'TWO_TO_TWO' ? ourTeamIdsValue[0] : ourTeamIdsValue[1];
        const sendHiresponse = await postsendHi({ toId: teamId, fromId: fromId });
      } else {
        console.error('ourTeamIdsValue is null');
      }
    } catch (error) {
      console.error('Error sending hi:', error);
    }
  };

  const handleConfirm = async () => {
    track('[클릭]미팅_팀_하이보내기_하이보내기버튼', {
      team_name: teamName,
      team_id: teamId,
      team_type: teamType,
      remaining_hi: hiCount
    });
    await sendHi(); 
    onConfirm();  
  };

  const handleClose = () => {
    track('[클릭]미팅_팀_하이보내기_하이보내기취소', {
      team_name: teamName,
      team_id: teamId,
      team_type: teamType,
      remaining_hi: hiCount
    });
    onClose();  
  };


  return (
    <S.Modallayout>
      <S.ModalContent>
        <S.ModalTitle>{teamName} 팀에게 하트를 보낼까요?</S.ModalTitle>
        <S.ModalText>
          우리팀이 보낸 하트를 수락하면 채팅방이 열려요!<br />
          하이는 우리 팀 하이 개수에서 차감되고,<br />
          보낸 하이는 취소할 수 없어요.
        </S.ModalText>
        <S.TicketCount>우리 팀의 하이 : {hiCount}개</S.TicketCount>
        <S.ButtonBox>
          <S.CancelButton onClick={handleClose}>취소</S.CancelButton>
          <S.ConfirmButton onClick={handleConfirm}>
            <S.Hi /> 
            <S.Text>보내기</S.Text>
          </S.ConfirmButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.Modallayout>
  );
};

export default SendQuestion;
