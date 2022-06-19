import { useLocation } from 'react-router-dom';

import { theme } from '@/style';

export const getBackgroundColor = () => {
  const { pathname } = useLocation();

  if (pathname === '/login' || pathname === '/find-password') {
    return '#fff';
  }

  return theme.colors.Gray100;
};
