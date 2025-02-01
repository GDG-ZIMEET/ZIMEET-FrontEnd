import { atom } from 'recoil';
import { Club, BoothsResponse, BoothDetailResponseType } from '../type/booth';

export const boothState = atom<Club[]>({
    key: 'boothState',
    default: [],
});

export const boothsResponseState = atom<BoothsResponse | null>({
    key: 'boothsResponseState',
    default: null,
});

//부스타입버튼 상태
export const selectedButtonState = atom<string>({
    key: 'selectedButtonState',
    default: 'N',
});

//성심광장 우측 좌측 상태
export const selectedSquareRLState = atom<string>({
    key: 'selectedSquareRLState',
    default: 'S_LEFT',
});

//부스 상세정보
export const boothDetailState = atom<BoothDetailResponseType | null>({
    key: 'boothDetailState',
    default: null, 
});