import React from 'react';
import TestPage from './pages/TestPage';
import { PopUpContextProvider } from './store';
import { AppProvider } from './utils';

const App = () => {
  return (
    <AppProvider components={[PopUpContextProvider]}>
      <TestPage />
    </AppProvider>
  );
};

export default App;
