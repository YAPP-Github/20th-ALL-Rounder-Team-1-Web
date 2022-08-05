import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useReissue } from '@/api';
import { setStorage } from '@/utils';

export const ProtectRoute = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();
  const { reissue } = useReissue();

  const checkRefreshTokenExists = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      const {
        data: {
          reissue: { accessToken },
        },
      } = await reissue();
      setStorage('accessToken', accessToken);
    }
  };

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      checkRefreshTokenExists();
      navigate('/');
      return;
    }
    navigate('/login');
  }, []);

  return <>{children}</>;
};
