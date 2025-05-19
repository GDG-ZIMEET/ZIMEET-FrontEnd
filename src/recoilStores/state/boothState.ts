import { atom } from 'recoil';
import { Club, BoothsResponse, BoothDetailResponseType } from '../type/booth';

export const boothState = atom<Club[]>({
    key: 'boothState',
    default: [],
});

export const selectedSpaceState = atom<string>({
    key: 'selectedSpaceState',
    default: 'A', // 기본값을 'A'로 설정
});

//부스 상세정보
export const boothDetailState = atom<BoothDetailResponseType | null>({
    key: 'boothDetailState',
    default: null, 
});