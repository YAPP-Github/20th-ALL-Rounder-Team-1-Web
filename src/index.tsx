import { createRoot } from 'react-dom/client';

import App from './App';
import { PopUpContextProvider } from './contexts';
import { AppProvider } from './utils';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <AppProvider components={[PopUpContextProvider]}>
    <App />
  </AppProvider>
);
