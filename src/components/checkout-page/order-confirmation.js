import React from 'react';
import { Link } from 'gatsby';
import { Button, Stack, Typography } from '@mui/material';

import { Icon } from 'ui';

const OrderConfirmation = () => (
  <Stack gap={3} alignItems='center'>
    <Icon name='CheckCircle' size={80} />
    <Typography>Your order has been confirmed!</Typography>
    <Button variant='contained' component={Link} to='/'>
      Explore more products
    </Button>
  </Stack>
);

export default OrderConfirmation;
