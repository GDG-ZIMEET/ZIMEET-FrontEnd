import { atom } from 'recoil';
import * as amplitude from '@amplitude/analytics-browser';

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
    localStorage.removeItem("authState");
    amplitude.setUserId('unknown_logout'); // 로그아웃 시 Amplitude userId 제거
  } else {
    localStorage.setItem("authState", JSON.stringify(authState));
    // 로그인 상태일 때 Amplitude userId 설정
    const amplitudeUserId = `zimeet_${authState.userId.toString()}`;
    amplitude.setUserId(amplitudeUserId);
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