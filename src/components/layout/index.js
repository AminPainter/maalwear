import React from 'react';
import { styled } from '@mui/material';

import Navigation from './navigation';
import Cart from 'components/cart';

const Layout = ({ children }) => (
  <>
    <Navigation />
    <Main>{children}</Main>
    <Cart />
  </>
);

export default Layout;

const Main = styled('main')(({ theme }) => ({
  paddingTop: theme.spacing(12),
}));
