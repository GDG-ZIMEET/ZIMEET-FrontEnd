import React from 'react';
import * as S from './Styles';
import AgeBox from './AgeBox/AgeBox';
import { myProfileData, profileDetails } from './ProfileData';
import ProfileDetail from './ProfileDetail/ProfileDetail';

const MyProfile: React.FC = () => {
    return (
        <S.MyprofileLayout>
            <S.MyProfileContainer>
                <S.MyProfileBox1>
                    <S.ProfileIMG>
                      <S.ProfileCircle />  
                      <S.Avatar>🌸</S.Avatar>
                    </S.ProfileIMG>
                    <AgeBox {...myProfileData} />
                </S.MyProfileBox1>
                <S.MyProfileBox2>
                    {profileDetails.map((detail, index) => (
                        <ProfileDetail key={index} label={detail.label} value={detail.value} />
                    ))}
                </S.MyProfileBox2>
            </S.MyProfileContainer>
        </S.MyprofileLayout>
    );
};

export default MyProfile;