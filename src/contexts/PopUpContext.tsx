import { createContext, Dispatch, PropsWithChildren, useState } from 'react';

type PopUpProps = {
  isCalendarOpen: boolean;
  setIsCalendarOpen: Dispatch<React.SetStateAction<boolean>>;
  isFindPasswordOpen: boolean;
  setIsFindPasswordOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const PopUpContext = createContext<PopUpProps>({} as PopUpProps);

export const PopUpContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isFindPasswordOpen, setIsFindPasswordOpen] = useState(false);

  return (
    <PopUpContext.Provider
      value={{
        isCalendarOpen,
        setIsCalendarOpen,
        isFindPasswordOpen,
        setIsFindPasswordOpen,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
