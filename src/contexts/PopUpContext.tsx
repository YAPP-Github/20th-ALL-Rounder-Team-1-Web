import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type PopupType = null | 'category' | 'schedule';

type PopupProps = {
  isPopped: boolean;
  setIsPopped: Dispatch<SetStateAction<boolean>>;
  type: PopupType;
  setPopup: (type: PopupType) => void;
};

export const PopupContext = createContext<PopupProps>({} as PopupProps);

export const PopupContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isPopped, setIsPopped] = useState(false);
  const [type, setType] = useState<PopupType>(null);

  const setPopup = (type: PopupType) => {
    setIsPopped(true);
    setType(type);
  };

  return (
    <PopupContext.Provider
      value={{
        isPopped,
        setIsPopped,
        type,
        setPopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};
