import React from 'react';
import { Stack, Typography, styled } from '@mui/material';

import { Counter } from 'ui';
import { useCart } from 'hooks';

const CartItem = ({ lineItemId, name, image, alt, size, lineTotal, quantity }) => {
  const { updateCartItemQuantity } = useCart();

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <ProductImage src={image} alt={alt} />

      <Stack gap={0.5} flex={1} alignItems='center'>
        <Typography>{name}</Typography>

        <Typography>
          <b>Size: </b> {size}
        </Typography>

        <Counter
          count={quantity}
          minCount={1}
          handleChange={newQuantity => updateCartItemQuantity(lineItemId, newQuantity)}
        />
      </Stack>

      <Typography>{lineTotal}</Typography>
    </Stack>
  );
};

export default CartItem;

const ProductImage = styled('img')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '8rem',
  width: '6rem',
  objectFit: 'cover',
  borderRadius: theme.borderRadius.tiny,
}));
