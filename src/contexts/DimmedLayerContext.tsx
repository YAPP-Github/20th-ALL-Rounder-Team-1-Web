import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type DimmedLayerProps = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const DimmedLayerContext = createContext<DimmedLayerProps>({} as DimmedLayerProps);

export const DimmedLayerContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <DimmedLayerContext.Provider
      value={{
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </DimmedLayerContext.Provider>
  );
};
