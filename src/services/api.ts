import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'http://engine.hotellook.com/api/v2';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

export const api = createAPI();
