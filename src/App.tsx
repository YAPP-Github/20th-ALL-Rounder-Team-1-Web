import React from 'react';
import TestPage from './pages/TestPage';
import { PopUpContextProvider } from './store';

interface IProps {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
  children: React.ReactNode;
}

const AppProvider = ({ components = [], children }: IProps) => {
  return (
    <>
      {components.reduceRight((accumulatedComponents, CurrentComponent) => {
        return <CurrentComponent>{accumulatedComponents}</CurrentComponent>;
      }, children)}
    </>
  );
};

const App = () => {
  return (
    <AppProvider components={[PopUpContextProvider]}>
      <TestPage />
    </AppProvider>
  );
};

export default App;
