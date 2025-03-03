import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from 'recoil/state/authState';
import Cookies from 'js-cookie';

const useLoginCheck = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    if (accessToken && refreshToken) {
      setAuthState({ accessToken, refreshToken });
    }
  }, [setAuthState]);
};

export default useLoginCheck;
