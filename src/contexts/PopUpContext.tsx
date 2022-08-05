import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type PopUpType = null | 'category' | 'schedule' | 'edit-category' | 'create-category';

type PopUpProps = {
  isPopped: boolean;
  setIsPopped: Dispatch<SetStateAction<boolean>>;
  type: PopUpType;
  setPopup: (type: PopUpType) => void;
  currentPopUp: string;
  setCurrentPopUp: Dispatch<SetStateAction<string>>;
};

export const PopUpContext = createContext<PopUpProps>({} as PopUpProps);

export const PopUpContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isPopped, setIsPopped] = useState(false);
  const [type, setType] = useState<PopUpType>(null);

  const setPopup = (type: PopUpType) => {
    setIsPopped(true);
    setType(type);
  };
  const [currentPopUp, setCurrentPopUp] = useState('');

  return (
    <PopUpContext.Provider
      value={{
        isPopped,
        setIsPopped,
        type,
        setPopup,
        currentPopUp,
        setCurrentPopUp,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
