import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import App from './App';

import { DimmedLayerContextProvider, PopUpContextProvider, ToastContextProvider } from '@/contexts';
import { GlobalStyle, theme } from '@/style';
import { AppProvider } from '@/utils';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL,
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <AppProvider
      components={[DimmedLayerContextProvider, PopUpContextProvider, ToastContextProvider]}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AppProvider>
  </ApolloProvider>
);
