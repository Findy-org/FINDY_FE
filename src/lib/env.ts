export const ENV = {
  API_BASE_URL: `${import.meta.env.VITE_API_BASE_URL}`,
  NAVER_MAPS_CLIENT_ID: `${import.meta.env.VITE_NAVER_MAPS_CLIENT_ID}`,
  NAVER_SEARCH_CLIENT_ID: `${import.meta.env.VITE_NAVER_SEARCH_CLIENT_ID}`,
} as const;
