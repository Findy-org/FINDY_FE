import axios from 'axios';

import { ENV } from './env';

export const naverInstance = axios.create({
  baseURL: '/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'X-Naver-Client-Id': ENV.NAVER_SEARCH_CLIENT_ID,
    'X-Naver-Client-Secret': ENV.NAVER_SEARCH_CLIENT_SECRET,
  },
  params: {},
});

export const get = async <T>(...args: Parameters<typeof naverInstance.get>) => {
  const response = await naverInstance.get<T>(...args);
  return response.data;
};

export const post = async <T>(...args: Parameters<typeof naverInstance.post>) => {
  const response = await naverInstance.post<T>(...args);
  return response.data;
};

export const put = async <T>(...args: Parameters<typeof naverInstance.put>) => {
  const response = await naverInstance.put<T>(...args);
  return response.data;
};

export const patch = async <T>(...args: Parameters<typeof naverInstance.patch>) => {
  const response = await naverInstance.patch<T>(...args);
  return response.data;
};

export const del = async <T>(...args: Parameters<typeof naverInstance.delete>) => {
  const response = await naverInstance.delete<T>(...args);
  return response.data;
};
