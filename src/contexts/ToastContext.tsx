import { createContext, PropsWithChildren, useEffect, useRef, useState } from 'react';

type ToastType = 'success' | 'error';

type ToastProps = {
  setToast: (type: ToastType, message: string) => void;
  getToast: () => { isToasted: boolean; toastType: string; toastMessage: string };
};

const TOAST_MAINTAIN_TIME = 3000;

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
