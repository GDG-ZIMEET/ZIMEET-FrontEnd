import { atom } from 'recoil';

interface AuthState {
  accessToken: string;
}


const getSessionAuthState = (): AuthState | null => {
  const storedAuth = sessionStorage.getItem('getSessionAuthState');
  return storedAuth ? JSON.parse(storedAuth) : null;
};


const setSessionAuthState = (auth: AuthState | null) => {
  if (auth) {
    sessionStorage.setItem('setSessionAuthState', JSON.stringify(auth));
  } else {
    sessionStorage.removeItem('setSessionAuthState');
  }
};


export const authState = atom<AuthState | null>({
  key: 'authStateType', 
  default: getSessionAuthState(), 
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        setSessionAuthState(newValue); 
      });
    },
  ],
});
