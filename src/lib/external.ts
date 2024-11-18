import axios from 'axios';

import { ENV } from './env';

export const externalInstance = axios.create({
  baseURL: ENV.FAST_API_BASE_URL,
  timeout: 5000,
});

export const get = async <T>(...args: Parameters<typeof externalInstance.get>) => {
  const response = await externalInstance.get<T>(...args);
  return response.data;
};

export const post = async <T>(...args: Parameters<typeof externalInstance.post>) => {
  const response = await externalInstance.post<T>(...args);
  return response.data;
};

export const put = async <T>(...args: Parameters<typeof externalInstance.put>) => {
  const response = await externalInstance.put<T>(...args);
  return response.data;
};

export const patch = async <T>(...args: Parameters<typeof externalInstance.patch>) => {
  const response = await externalInstance.patch<T>(...args);
  return response.data;
};

export const del = async <T>(...args: Parameters<typeof externalInstance.delete>) => {
  const response = await externalInstance.delete<T>(...args);
  return response.data;
};
