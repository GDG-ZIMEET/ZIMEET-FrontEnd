import { atom } from 'recoil';

interface AuthState {
  isAuthenticated: boolean;
  userId: number;
}

// `localStorage`에서 로그인 상태를 불러오기
const getStoredAuthState = (): AuthState => {
  const storedState = localStorage.getItem("authState");
  return storedState ? JSON.parse(storedState) : { userId: 0, isAuthenticated: false };
};

// `localStorage`에 로그인 상태를 저장
const setStoredAuthState = (authState: AuthState) => {
  if (!authState.isAuthenticated) {
    localStorage.removeItem("authState"); // 로그아웃 상태일 경우 저장 안함
  } else {
    localStorage.setItem("authState", JSON.stringify(authState));
  }
};

// Recoil 상태에  자동 저장
export const authState = atom<AuthState>({
  key: 'authState',
  default: getStoredAuthState(), // 초기값을 localStorage에서 불러오기
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        setStoredAuthState(newValue); // 상태 변경 시 자동 저장
      });
    },
  ],
});