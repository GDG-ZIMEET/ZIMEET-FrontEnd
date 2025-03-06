import { atom } from 'recoil';

interface AuthState {
  accessToken: string;
  userId: number;
}


const getSessionAuthState = (): AuthState | null => {
  const storedAuth = sessionStorage.getItem('getSessionAuthState');
  return storedAuth ? JSON.parse(storedAuth) : null;
};


const setSessionAuthState = (auth: AuthState | null) => {
  if (auth) {
    sessionStorage.setItem('authState', JSON.stringify(auth));
  } else {
    sessionStorage.removeItem('authState');
  }
};


export const authState = atom<AuthState | null>({
  key: 'authState', 
  default: getSessionAuthState(), 
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        setSessionAuthState(newValue); 
      });
    },
  ],
});
