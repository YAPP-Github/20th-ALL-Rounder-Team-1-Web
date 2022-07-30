import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type DimmedLayerProps = {
  isDimmed: boolean;
  setIsDimmed: Dispatch<SetStateAction<boolean>>;
};

export const DimmedLayerContext = createContext<DimmedLayerProps>({} as DimmedLayerProps);

export const DimmedLayerContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isDimmed, setIsDimmed] = useState(false);

  return (
    <DimmedLayerContext.Provider
      value={{
        isDimmed,
        setIsDimmed,
      }}
    >
      {children}
    </DimmedLayerContext.Provider>
  );
};
