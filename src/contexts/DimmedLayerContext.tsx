import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type DimmedLayerProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

export const DimmedLayerContext = createContext<DimmedLayerProps>({} as DimmedLayerProps);

export const DimmedLayerContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState('dark');

  return (
    <DimmedLayerContext.Provider
      value={{
        isVisible,
        setIsVisible,
        type,
        setType,
      }}
    >
      {children}
    </DimmedLayerContext.Provider>
  );
};
