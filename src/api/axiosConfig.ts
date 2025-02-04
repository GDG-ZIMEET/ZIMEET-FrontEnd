import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL; 

//토큰이 필요 없는 경우
const publicAxios = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
});

//토큰이 필요한 경우
const privateAxios = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  

  privateAxios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken'); 
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export { privateAxios, publicAxios };
