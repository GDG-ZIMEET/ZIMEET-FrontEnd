import { atom } from 'recoil';

interface AuthState {
  accessToken: string;
  refreshToken: string;
}

<<<<<<< Updated upstream

const getSessionAuthState = (): AuthState | null => {
  const storedAuth = sessionStorage.getItem('authState');
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
  key: 'authStateType', 
  default: getSessionAuthState(), 
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        setSessionAuthState(newValue); 
      });
    },
  ],
=======
const storedAuthState = localStorage.getItem('authState');
const initialAuthState: AuthState | null = storedAuthState ? JSON.parse(storedAuthState) : null;

export const authState = atom<AuthState | null>({
  key: 'authStateType',
  default: initialAuthState,
>>>>>>> Stashed changes
});
