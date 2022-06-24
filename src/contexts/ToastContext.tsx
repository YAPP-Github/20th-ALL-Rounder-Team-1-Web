import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type ToastProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
};

export const ToastContext = createContext<ToastProps>({} as ToastProps);

export const ToastContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <ToastContext.Provider
      value={{
        isVisible,
        setIsVisible,
        text,
        setText,
        isSuccess,
        setIsSuccess,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
