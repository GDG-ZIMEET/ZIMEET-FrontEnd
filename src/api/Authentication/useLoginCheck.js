import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from 'recoil/state/authState';

const useLoginCheck = () => {
  const setAuthState = useSetRecoilState(authState);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      setAuthState({ accessToken });
    }
  }, [setAuthState]);
};

export default useLoginCheck;
