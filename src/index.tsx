import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { GlobalStyle, theme } from '@/style';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
