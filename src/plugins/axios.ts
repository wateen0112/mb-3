import { useAuth } from '@/composables';
import { useAppStore } from '@/stores/App';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { API_URL } from '~config';

const errorHandler = async (error: AxiosError) => {
  const { RefreshToken, GetAccessToken } = useAuth();
  const appStore = useAppStore();

  appStore.$patch({ isLoading: false });

  const config: AxiosRequestConfig | undefined = error?.config;

  if (error.response?.status === 401) {
  
   localStorage.clear();
   window.location.href='/login'
  }

  return Promise.reject(error);
};

const requestHandler = async (request: AxiosRequestConfig) => {
  const appStore = useAppStore();

  if (request.params && request.params.loading !== false) {
    appStore.$patch({ isLoading: true });
  }

  const { GetAccessToken } = useAuth();

  if (request.headers) {
    request.headers.Authorization = `Bearer ${await GetAccessToken()}`;
  
  }

  return request;
};

const responseHandler = (response: AxiosResponse) => {
  const appStore = useAppStore();
  appStore.$patch({ isLoading: false });
  return response;
};
const accessToken =  localStorage.getItem('token')
const axiosIns = axios.create({
  baseURL: API_URL,
  headers: {     
         Authorization: `Bearer ${accessToken}`,
    mode: 'no-cors',
    'Content-Type': 'application/json',
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    Accept: '*/*',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*', // This may not be effective depending on server configuration
  },
});

axiosIns.interceptors.request.use(requestHandler);
axiosIns.interceptors.response.use(responseHandler, errorHandler);

export { axiosIns };
