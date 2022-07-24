import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider } from 'styled-components';

import App from './App';

import {
  CategoryContextProvider,
  DimmedLayerContextProvider,
  PopUpContextProvider,
  RegisterContextProvider,
  ToastContextProvider,
} from '@/contexts';
import { GlobalStyle, theme } from '@/style';
import { AppProvider } from '@/utils';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Access-Token': process.env.REACT_APP_TOKEN && process.env.REACT_APP_TOKEN,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <AppProvider
      components={[
        CategoryContextProvider,
        DimmedLayerContextProvider,
        DimmedLayerContextProvider,
        RegisterContextProvider,
        PopUpContextProvider,
        ToastContextProvider,
      ]}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AppProvider>
  </ApolloProvider>
);
