import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

// Axios 인스턴스 생성
const publicAxios = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});
const privateAxios = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

// 요청 인터셉터 - accessToken 추가
privateAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}, Promise.reject);

// 응답 인터셉터 - 401 발생 시 accessToken 자동 갱신
privateAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('리프레시 토큰 없음');

        // 새 accessToken 요청
        const { data } = await publicAxios.post('/user/refresh', { refreshToken });
        const newAccessToken = data.data.accessToken;

        // 새 토큰 저장 및 기존 요청 재시도
        localStorage.setItem('accessToken', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return privateAxios(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { privateAxios, publicAxios };
