/* eslint-disable @typescript-eslint/no-shadow */
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

const createAxiosInstance = () => {
  const config: AxiosRequestConfig = {
    baseURL: 'https://api.github.com/',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(config);
  instance.interceptors.request.use(
    async config => {
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    async (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export const apiService = createAxiosInstance();
