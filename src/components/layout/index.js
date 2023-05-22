import React, { useState } from 'react';
import { styled } from '@mui/material';

import Navigation from './navigation';
import Cart from 'components/cart';

const Layout = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navigation setShowCart={setShowCart} />
      <Main>{children}</Main>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </>
  );
};

export default Layout;

const Main = styled('main')(({ theme }) => ({
  paddingTop: theme.spacing(12),
}));
