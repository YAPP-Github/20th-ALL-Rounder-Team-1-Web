import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { getStorage } from '@/utils';

export const ProtectRoute = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getStorage('accessToken');
    if (accessToken) {
      navigate('/');
      return;
    }

    navigate('/login');
  }, []);

  return <>{children}</>;
};
