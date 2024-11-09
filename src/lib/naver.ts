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

export const get = <T>(...args: Parameters<typeof naverInstance.get>) => {
  return naverInstance.get<T, T>(...args);
};

export const post = <T>(...args: Parameters<typeof naverInstance.post>) => {
  return naverInstance.post<T, T>(...args);
};

export const put = <T>(...args: Parameters<typeof naverInstance.put>) => {
  return naverInstance.put<T, T>(...args);
};

export const patch = <T>(...args: Parameters<typeof naverInstance.patch>) => {
  return naverInstance.patch<T, T>(...args);
};

export const del = <T>(...args: Parameters<typeof naverInstance.delete>) => {
  return naverInstance.delete<T, T>(...args);
};
