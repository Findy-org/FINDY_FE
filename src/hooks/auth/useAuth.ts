import { useCookies } from 'react-cookie';

export const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const token = cookies.token;

  const removeToken = () => {
    removeCookie('token', { path: '/' });
  };

  const isTokenValid = () => {
    return !!token;
  };

  return { token, setToken: setCookie, removeToken, isTokenValid };
};
