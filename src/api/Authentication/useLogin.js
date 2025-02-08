import { useSetRecoilState } from 'recoil';
import { authState } from 'recoil/state/authState';
import { publicAxios } from 'api/axiosConfig';

const useLogin = () => {
  const setAuthState = useSetRecoilState(authState);

  const handleLogin = async ({ studentNumber, password, setErrorMessage, navigate }) => {
    setErrorMessage('');

    try {
      const response = await publicAxios.post(`/user/login`, {
        studentNumber,
        password,
      });

      const { accessToken, refreshToken } = response.data.data;
      setAuthState({ accessToken, refreshToken });

      // console.log("로그인 성공:", accessToken); 
      // alert("로그인 성공");

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
