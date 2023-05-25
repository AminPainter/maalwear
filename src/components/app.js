import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@mui/material';

import { theme } from 'ui';
import Layout from 'components/layout';
import 'styles/global.css';
import { UITrackerProvider } from 'store/uitracker';

const queryClient = new QueryClient();

const App = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <UITrackerProvider>
        <Layout>{children}</Layout>
      </UITrackerProvider>
    </ThemeProvider>

    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
