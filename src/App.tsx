import TestPage from './pages/TestPage';
import { PopUpContextProvider } from './store';

const App = () => {
  return (
    <PopUpContextProvider>
      <TestPage />
    </PopUpContextProvider>
  );
};

export default App;
