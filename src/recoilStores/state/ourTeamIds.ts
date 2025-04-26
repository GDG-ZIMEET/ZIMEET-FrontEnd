import { atom } from 'recoil';

export const ourteamIds = atom<number[] | null>({
  key: 'ourteamIds',
  default: null,
});
