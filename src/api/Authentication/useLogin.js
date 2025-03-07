import { useSetRecoilState } from 'recoil';
import { authState } from 'recoil/state/authState';
import { publicAxios } from 'api/axiosConfig';

const useLogin = () => {
  const setAuthState = useSetRecoilState(authState);

  const handleLogin = async ({ studentNumber, password, setErrorMessage, navigate }) => {
    setErrorMessage('');

    try {
      const response = await publicAxios.post(
        `/user/login`,
        { studentNumber, password },
        { withCredentials: true } 
      );
      
      const { accessToken, userId } = response.data.data;

      if (!accessToken) {
        throw new Error('서버에서 액세스 토큰을 반환하지 않았습니다.');
      }

      setAuthState({ isAuthenticated: true, accessToken, userId });

      navigate('/meeting22');
    } catch (error) {
      const errorMessage = error.response?.data?.message || '로그인 실패';
      setErrorMessage(errorMessage);

      console.error('Error:', error.response?.status, error.response?.data?.message || error.message);
    }
  };

  return { handleLogin };
};

export default useLogin;
