import { useEffect } from 'react';
import { useLocation } from 'react-router';

const BACKGROUND_COLOR_WHITE_PAGES = [
  '/agreement',
  '/login',
  '/get-temp-password',
  '/register',
  '/select-interest',
];

export const useBackgroundColor = () => {
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor = BACKGROUND_COLOR_WHITE_PAGES.includes(location.pathname)
      ? '#fff'
      : '#f5f7f8';
  }, [location.pathname]);
};
