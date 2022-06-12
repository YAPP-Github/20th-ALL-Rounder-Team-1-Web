import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type PopUpProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  isCalendarOpen: boolean;
  setIsCalendarOpen: Dispatch<SetStateAction<boolean>>;
  isFindPasswordOpen: boolean;
  setIsFindPasswordOpen: Dispatch<SetStateAction<boolean>>;
  innerContent: ReactNode;
  setInnerContent: Dispatch<SetStateAction<ReactNode>>;
};

export const PopUpContext = createContext<PopUpProps>({} as PopUpProps);

export const PopUpContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isFindPasswordOpen, setIsFindPasswordOpen] = useState(false);
  const [innerContent, setInnerContent] = useState<ReactNode>();

  return (
    <PopUpContext.Provider
      value={{
        isVisible,
        setIsVisible,
        isCalendarOpen,
        setIsCalendarOpen,
        isFindPasswordOpen,
        setIsFindPasswordOpen,
        innerContent,
        setInnerContent,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
