import { useSetRecoilState } from 'recoil';
import { authState } from 'recoil/state/authState';
import { publicAxios } from 'api/axiosConfig';
import Cookies from 'js-cookie'; // js-cookie 사용

const useLogin = () => {
  const setAuthState = useSetRecoilState(authState);

  const handleLogin = async ({ studentNumber, password, setErrorMessage, navigate }) => {
    setErrorMessage('');

    try {
      const response = await publicAxios.post(`/user/login`, {
        studentNumber,
        password,
      }, { withCredentials: true });

      const { accessToken, refreshToken } = response.data.data;
      setAuthState({ accessToken, refreshToken });

      Cookies.set('accessToken', accessToken, { expires: 7, path: '' });
      Cookies.set('refreshToken', refreshToken, { expires: 7, path: '' });

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
