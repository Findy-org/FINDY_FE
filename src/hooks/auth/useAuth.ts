import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [searchParams, setSearchParams] = useSearchParams();
  const token = cookies.token;

  useEffect(() => {
    const tokenFromURL = searchParams.get('token');
    if (tokenFromURL) {
      setCookie('token', tokenFromURL, { path: '/' });
      setSearchParams({}, { replace: true });
      navigate('/map', { replace: true });
    }
  }, [navigate, searchParams, setCookie, setSearchParams]);

  const removeToken = () => {
    removeCookie('token', { path: '/' });
  };

  const isTokenValid = () => {
    return !!token;
  };

  return { token, setToken: setCookie, removeToken, isTokenValid };
};
