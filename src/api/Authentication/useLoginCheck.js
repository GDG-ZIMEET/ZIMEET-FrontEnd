import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from 'recoil/state/authState';
import { publicAxios } from 'api/axiosConfig';

const useLoginCheck = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await publicAxios.get(`/user/refresh`, { withCredentials: true });

        // 인증 성공 시 상태 업데이트
        setAuthState({ isAuthenticated: true });
      } catch (error) {
        // 인증 실패 시 상태 초기화
        setAuthState({ isAuthenticated: false });
        console.error('Auth check failed:', error.response?.status, error.response?.data?.message || error.message);
      }
    };

    checkAuth();
  }, [setAuthState]);
};

export default useLoginCheck;
