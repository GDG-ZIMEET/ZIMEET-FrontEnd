import React, {useState} from "react";
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import Profiles from "../../../components/TeamIntro/Profile/ProfileData";
import Header from "../../../components/TeamIntro/Header/Header";
import MyProfile from "../../../components/TeamIntro/Profile/MyProfile";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import AcceptHiModal from "../../../components/Chatting/ReceiveHi/Modal/AcceptHiModal/AcceptHiModal";
import AcceptedHiModal from "../../../components/Chatting/ReceiveHi/Modal/AcceptedHiModal/AcceptedHiModal";
import RefuseHiModal from "../../../components/Chatting/ReceiveHi/Modal/RefuseHiModal/RefuseHiModal";
import RefusedHiModal from "../../../components/Chatting/ReceiveHi/Modal/RefusedHiModal/RefusedHiModal";
import { User } from "recoil/type/Meeting/TeamDetail";

const ReceivedHiTeam: React.FC = () => {
    const navigate = useNavigate();
    const [isPremium, setIsPremium] = useState(true); // TODO : API 연결 후 RecoilState로 변경
    const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
    const [isRefuseModalOpen, setIsRefuseModalOpen] = useState(false);
    const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false);
    const [isRefusedModalOpen, setIsRefusedModalOpen] = useState(false);

    const teamDetailData = {
        verification: 1, //api연결 후 수정 
        name: 'Team Name' // api연결 후 수정 
    };

    const openAcceptModal = () => {
        setIsAcceptModalOpen(true);
    };
    const closeAcceptModal = () => {
        setIsAcceptModalOpen(false);
    };

    const openAcceptedModal = () => {
        setIsAcceptModalOpen(false);
        setIsAcceptedModalOpen(true);
    };
    const closeAcceptedModal = () => {
        setIsAcceptedModalOpen(false);
        navigate('/chattingInventory');
    };

    const openRefuseModal = () => {
        setIsRefuseModalOpen(true);
    };
    const closeRefuseModal = () => {
        setIsRefuseModalOpen(false);
    };

    const openRefusedModal = () => {
        setIsRefuseModalOpen(false);
        setIsRefusedModalOpen(true);
    };
    const closeRefusedModal = () => {
        setIsRefusedModalOpen(false);
        navigate('/receiveHi');
    };

    return (
        <S.Container>
            <Header verification={teamDetailData?.verification ?? 0} name={teamDetailData?.name || ''}/>
            {Profiles?.userList.map((user: User) => (
            <MyProfile 
                key={user.userId} 
                profileData={user}
                gender={Profiles.gender}
                isPremium={isPremium} />
            ))}
            <S.ButtonWrapper>
                <S.RefuseButton onClick={openRefuseModal}>거절</S.RefuseButton>
                <S.Button onClick={openAcceptModal}>하이 수락하기</S.Button>
            </S.ButtonWrapper>
            <NavigationBar />

            {isAcceptModalOpen && <AcceptHiModal onClose={closeAcceptModal} onConfirm={openAcceptedModal} teamName={'팀명예시'}/>}
            {isAcceptedModalOpen && <AcceptedHiModal onClose={closeAcceptedModal}/>}
            {isRefuseModalOpen && <RefuseHiModal onClose={closeRefuseModal} onConfirm={openRefusedModal} teamName={'팀명예시'}/>}
            {isRefusedModalOpen && <RefusedHiModal onClose={closeRefusedModal}/>}
        </S.Container>
    );
};

export default ReceivedHiTeam