import { PropsWithChildren } from 'react';

interface AppProviderProps {
  components?: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
}

export const AppProvider = ({ components = [], children }: PropsWithChildren<AppProviderProps>) => {
  return (
    <>
      {components.reduceRight((accumulatedComponents, CurrentComponent) => {
        return <CurrentComponent>{accumulatedComponents}</CurrentComponent>;
      }, children)}
    </>
  );
};
