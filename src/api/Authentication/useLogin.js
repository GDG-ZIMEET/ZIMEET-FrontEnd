import { useSetRecoilState } from 'recoil';
import { authState } from 'recoilStores/state/authState';
import { publicAxios } from 'api/axiosConfig';
import * as amplitude from '@amplitude/analytics-browser';

const useLogin = () => {
  const setAuthState = useSetRecoilState(authState);

  const handleLogin = async ({ studentNumber, password, setErrorMessage, navigate }) => {
    setErrorMessage('');

    try {
      const response = await publicAxios.post('/user/login', {
        studentNumber,
        password,
      }, { withCredentials: true });

      const { accessToken, userId } = response.data.data;
      setAuthState({ userId , isAuthenticated: true });
      localStorage.setItem('accessToken', accessToken);
      
      const amplitudeUserId = `zimeet_${userId.toString()}`;
      console.log('Setting Amplitude userId:', amplitudeUserId);
      amplitude.setUserId(amplitudeUserId);
      
      navigate('/meeting22');

    } catch (error) {
      const errorMessage = error.response?.data?.message || '로그인 실패';
      setErrorMessage(errorMessage);

      if (error.response) {
        console.error('Error Code:', error.response.status);
        console.error('Error Message:', error.response.data.message);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return { handleLogin };
};

export default useLogin;