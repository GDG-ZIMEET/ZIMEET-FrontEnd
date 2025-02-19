import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from 'recoil/state/authState';
import { privateAxios } from 'api/axiosConfig';

const useUserProfile = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedAuth = localStorage.getItem('authState');
    if (storedAuth) setAuth(JSON.parse(storedAuth));

    const fetchUserProfile = async () => {
      if (!auth?.accessToken) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await privateAxios.get('/user/myprofile', {
          headers: { Authorization: `Bearer ${auth.accessToken}` },
        });
        if (response.data) {
          setUserInfo(response.data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.response?.data || error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [setAuth]);

  return { userInfo, isLoading };
};

export default useUserProfile;
