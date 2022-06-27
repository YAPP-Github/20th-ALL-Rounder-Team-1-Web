import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type ToastProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
};

export const ToastContext = createContext<ToastProps>({} as ToastProps);

export const ToastContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleToastMessage = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    if (isClicked) {
      handleToastMessage();
      setIsClicked(false);
    }
  }, [isClicked]);

  return (
    <ToastContext.Provider
      value={{
        isVisible,
        setIsVisible,
        text,
        setText,
        isSuccess,
        setIsSuccess,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
