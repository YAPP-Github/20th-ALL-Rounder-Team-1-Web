import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type PopUpProps = {
  isPopped: boolean;
  setIsPopped: Dispatch<SetStateAction<boolean>>;
};

export const PopUpContext = createContext<PopUpProps>({} as PopUpProps);

export const PopUpContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isPopped, setIsPopped] = useState(false);

  return (
    <PopUpContext.Provider
      value={{
        isPopped,
        setIsPopped,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
