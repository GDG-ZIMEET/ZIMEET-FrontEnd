import { atom } from 'recoil';
import { Club, BoothsResponse } from '../type/booth';

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
    default: 'S-LEFT',
});