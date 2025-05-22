import { atom } from 'recoil';
import { MyProfileType } from '../../type/Meeting/MyProfile';

//1대1 미팅 마이 프로필 상태 
export const MyProfileState = atom<MyProfileType | null>({
    key: 'MyProfileState',
    default: null,
});

//2대2 내 팀 id
export const OurTwoToTwoState = atom<number | 0>({
    key: 'OurTwoToTwoState',
    default: 0,
});