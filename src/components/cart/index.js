import React from 'react';
import { Link, navigate } from 'gatsby';
import { Box, Button, Divider, Drawer, IconButton, Stack, Typography, styled } from '@mui/material';

import { Heading, Icon } from 'ui';
import { useCart } from 'hooks';
import useUITracker from 'store/uitracker';
import CartItem from './cart-item';

const Cart = () => {
  const { showCart, setShowCart } = useUITracker();
  const { cart } = useCart();

  const handleCloseCart = () => setShowCart(false);

  return (
    <Drawer open={showCart} anchor='right' onClose={handleCloseCart}>
      <CartScreen>
        <Box py={2} px={4}>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Heading variant='secondary'>cart</Heading>

            <IconButton onClick={handleCloseCart}>
              <Icon name='X' />
            </IconButton>
          </Stack>

          <Divider sx={{ my: 2 }} />

          {cart?.line_items.length > 0 ? (
            <CartItemList gap={3}>
              {cart.line_items.map((item, idx) => (
                <div key={item.id}>
                  <CartItem
                    lineItemId={item.id}
                    image={item.image.url}
                    alt={item.image.id}
                    name={item.name}
                    quantity={item.quantity}
                    lineTotal={item.line_total.formatted_with_symbol}
                  />
                  {idx !== cart.line_items.length - 1 && <Divider />}
                </div>
              ))}
            </CartItemList>
          ) : (
            <Stack height='85vh' gap={4} justifyContent='center' alignItems='center'>
              <Heading variant='tertiary' textAlign='center'>
                your cart is empty!
              </Heading>
              <Typography width='40%' textAlign='center'>
                Looks like you haven't added anything to your cart. Explore top categories now!
              </Typography>
              <Button
                variant='contained'
                onClick={() => {
                  setShowCart(false);
                  navigate('/');
                }}>
                view products
              </Button>
            </Stack>
          )}
        </Box>

        {cart?.line_items.length > 0 && (
          <CartSummary>
            <Stack direction='row' justifyContent='space-between'>
              <Typography
                variant='body2'
                fontWeight={300}
                textTransform='uppercase'
                letterSpacing={2}>
                subtotal
              </Typography>
              <Typography variant='body2'>{cart?.subtotal.formatted_with_symbol || 0}</Typography>
            </Stack>

            <Button variant='contained' component={Link} to='/checkout' onClick={handleCloseCart}>
              Proceed to checkout
            </Button>
          </CartSummary>
        )}
      </CartScreen>
    </Drawer>
  );
};

export default Cart;

const CartScreen = styled(Stack)(({ theme }) => ({
  width: '40vw',
  height: '100%',
  justifyContent: 'space-between',
}));

const CartItemList = styled(Stack)(({ theme }) => ({
  overflow: 'auto',
  height: '50vh',
  paddingRight: theme.spacing(3),
}));

const CartSummary = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey.A200,
  padding: theme.spacing(3, 4),
  gap: theme.spacing(3),
}));
