import { atom } from 'recoil';

interface AuthState {
  accessToken: string;
  refreshToken: string;
}

export const authState = atom<AuthState | null>({
  key: 'authState',
  default: null,
});
