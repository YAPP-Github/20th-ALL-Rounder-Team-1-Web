import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type DimmedType = 'dark' | 'transparent';

type DimmedLayerProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  type: DimmedType;
  setType: Dispatch<SetStateAction<DimmedType>>;
};

export const DimmedLayerContext = createContext<DimmedLayerProps>({} as DimmedLayerProps);

export const DimmedLayerContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState<DimmedType>('dark');

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
