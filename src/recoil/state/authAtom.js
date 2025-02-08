import { atom } from 'recoil';

export const authAtom = atom({
  key: 'authAtom', 
  default: {
    accessToken: null,
    refreshToken: null,
  },
});
