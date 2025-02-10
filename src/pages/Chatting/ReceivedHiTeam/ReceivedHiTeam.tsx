import React, {useState} from "react";
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import Profiles from "../../../components/TeamIntro/Profile/ProfileData";
import Header from "../../../components/TeamIntro/Header/Header";
import MyProfile from "../../../components/TeamIntro/Profile/MyProfile";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";

const ReceivedHiTeam: React.FC = () => {
    const [isPremium, setIsPremium] = useState(true); // TODO : API 연결 후 RecoilState로 변경

    const profileData = Profiles.filter(profile => profile.isMe).slice(0, 2);

    return (
        <S.Container>
            <Header />
            {profileData && profileData.map((profile, index) => (
                <MyProfile
                    key={index}
                    profileData={profile}
                    isPremium={isPremium} />
            ))}
            <S.ButtonWrapper>
                <S.RefuseButton>거절</S.RefuseButton>
                <S.Button>하이 수락하기</S.Button>
            </S.ButtonWrapper>
            <NavigationBar />
        </S.Container>
    );
};

export default ReceivedHiTeam