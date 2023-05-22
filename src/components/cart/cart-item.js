import React from 'react';
import { Stack, Typography, styled } from '@mui/material';

const CartItem = ({ name, image, alt, size, lineTotal }) => (
  <Stack direction='row' justifyContent='space-between' alignItems='center'>
    <ProductImage src={image} alt={alt} />

    <Stack justifyContent='space-between'>
      <Typography>{name}</Typography>

      <Typography>
        <b>Size: </b> {size}
      </Typography>
    </Stack>

    <Typography>{lineTotal}</Typography>
  </Stack>
);

export default CartItem;

const ProductImage = styled('img')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '8rem',
  width: '6rem',
  objectFit: 'cover',
  borderRadius: '3px',
}));
