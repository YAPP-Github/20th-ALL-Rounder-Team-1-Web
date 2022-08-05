import { createContext, PropsWithChildren, useEffect, useRef, useState } from 'react';

import { getStorage } from '@/utils';

type ToastType = 'success' | 'error';

type ToastProps = {
  setToast: (type: ToastType, message: string) => void;
  getToast: () => { isToasted: boolean; toastType: string; toastMessage: string };
};

const valueToTime = (value: string) => {
  switch (value) {
    case '3초':
      return 3000;
    case '5초':
      return 5000;
    case '10초':
      return 10000;
    case '30초':
      return 30000;
    case '60초':
      return 60000;
    default:
      return 3000;
  }
};

const TOAST_MAINTAIN_TIME = valueToTime(getStorage('accessibility') ?? '');

export const ToastContext = createContext<ToastProps>({} as ToastProps);

export const ToastContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isToasted, setIsToasted] = useState(false);
  const toastType = useRef<ToastType>('success');
  const toastMessage = useRef('');

  useEffect(() => {
    const timer = setTimeout(() => setIsToasted(false), TOAST_MAINTAIN_TIME);

    return () => clearTimeout(timer);
  }, [isToasted]);

  const getToast = () => {
    return { isToasted, toastType: toastType.current, toastMessage: toastMessage.current };
  };

  const setToast = (type: ToastType, message: string) => {
    toastType.current = type;
    toastMessage.current = message;
    setIsToasted(true);
  };

  return (
    <ToastContext.Provider
      value={{
        setToast,
        getToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
