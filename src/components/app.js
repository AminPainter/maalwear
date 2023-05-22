import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@mui/material';

import { theme } from 'ui';
import Layout from 'components/layout';
import 'styles/global.css';

const queryClient = new QueryClient();

const App = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
    </ThemeProvider>

    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
