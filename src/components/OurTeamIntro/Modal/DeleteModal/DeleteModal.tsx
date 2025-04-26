import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles'; 
import { getTeamdeleteCount } from '../../../../api/TeamMaking/GetTeamdeleteCount';
import { deleteTeam } from '../../../../api/Meeting/DeleteTeam';
import { useResetRecoilState } from 'recoil';
import { ourteamIds } from 'recoilStores/state/ourTeamIds';

interface DeleteModalProps {
  teamType: string;
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ teamType, onClose }) => {
  const [teamdeleteCount, setTeamdeleteCount] = useState(0);
  const navigate = useNavigate();
  const resetTeamIds = useResetRecoilState(ourteamIds);

  const handleDeleteConfirm = async () => {
    const response = await deleteTeam(teamType);
    if (response) {
      resetTeamIds();
      navigate('/meeting22');
    }
    else {
      console.error('팀 삭제 실패');
    }
  };

  useEffect(() => {
    const fetchTeamdeleteCount = async () => {
      try {
        const response = await getTeamdeleteCount();
        setTeamdeleteCount(response.data.leftDelete);
      } catch (e) {
        console.error(e);
      }
    };
    fetchTeamdeleteCount();
  }, []);

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalTitle>
          {teamdeleteCount > 0 ? "팀을 삭제하시겠어요?" : "팀을 삭제할 수 없어요."}
        </S.ModalTitle>
        <S.ModalText>
          {teamdeleteCount > 0 ? (
              <>
                팀을 삭제할 경우, <b>팀의 남은 하이는 사라지며</b><br/>
                그동안 <b>이 팀으로 보낸 / 받은 하이들도 사라져요.</b><br/>
                또한, 팀 내 <span>모든 팀원의 삭제 기회가 1개씩 차감</span>돼요.<br/>
                팀 삭제 후 다시 만들 수 있는 기회는 <b>앞으로</b> <b style={{color: '#EA4335'}}>{teamdeleteCount}번</b> 더 남았어요.
              </>
            ) : (
              <>
                팀원 중 삭제 기회 <b>2회를 모두 사용</b>한 팀원이 있어요.<br />
                팀을 삭제하려면 ZI밋 부스에 와서 2,000원을 내고<br/>
                팀 삭제를 완료할 수 있어요.
              </>
            )}
        </S.ModalText>
        <S.ButtonBox>
          {teamdeleteCount > 0 ? (
            <>
              <S.CancelButton onClick={onClose}>취소하기</S.CancelButton>
              <S.ConfirmButton onClick={handleDeleteConfirm}>삭제</S.ConfirmButton>
            </>
          ) : (
              <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
          )}
        </S.ButtonBox>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default DeleteModal;
