import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from 'recoilStores/state/authState';
import { privateAxios } from 'api/axiosConfig';

const useLoginCheck = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('refreshToken='))
        ?.split('=')[1];

      if (!accessToken && !refreshToken) {
        setAuthState({ userId: null, isAuthenticated: false });
        return;
      }

      try {
        const response = await privateAxios.get('/user/check-login');
        // console.log('서버 응답:', response.data);

        const { status, data } = response.data;

        if (status !== 'OK' || !data?.loggedIn) {
          throw new Error('로그인 상태가 유효하지 않음');
        }

        setAuthState({ userId: data.id, isAuthenticated: true });
      } catch (error) {
        console.error('로그인 상태 확인 실패:', error.response?.data?.message || error.message);
        localStorage.removeItem('accessToken');

        document.cookie = 'refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT';

        setAuthState({ userId: null, isAuthenticated: false });
      }
    };

    checkLoginStatus();
  }, [setAuthState]);

  return null;
};

export default useLoginCheck;
