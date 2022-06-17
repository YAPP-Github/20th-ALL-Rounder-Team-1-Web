import { EditProfile } from '@/components/common/EditProfile';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type SettingProps = {
  currentContent: ReactNode;
  setCurrentContent: Dispatch<SetStateAction<ReactNode>>;
};

export const SettingContext = createContext<SettingProps>({} as SettingProps);

export const SettingContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [currentContent, setCurrentContent] = useState<ReactNode>(<EditProfile />);

  return (
    <SettingContext.Provider
      value={{
        currentContent,
        setCurrentContent,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};
