import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type PopUpProps = {
  isPopped: boolean;
  setIsPopped: Dispatch<SetStateAction<boolean>>;
  currentPopUp: string;
  setCurrentPopUp: Dispatch<SetStateAction<string>>;
};

export const PopUpContext = createContext<PopUpProps>({} as PopUpProps);

export const PopUpContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isPopped, setIsPopped] = useState(false);
  const [currentPopUp, setCurrentPopUp] = useState('');

  return (
    <PopUpContext.Provider
      value={{
        isPopped,
        setIsPopped,
        currentPopUp,
        setCurrentPopUp,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
