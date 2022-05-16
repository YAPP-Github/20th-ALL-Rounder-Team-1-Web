import { PopUpContextProvider } from '@/contexts';
import TestPage from '@/pages/TestPage';
import { AppProvider } from '@/utils';

const App = () => {
  return (
    <AppProvider components={[PopUpContextProvider]}>
      <TestPage />
    </AppProvider>
  );
};

export default App;
