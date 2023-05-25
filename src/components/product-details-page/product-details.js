import React from 'react';
import { Button, Divider, Stack, Typography, styled } from '@mui/material';

import { Grid, Heading, Section } from 'ui';
import { useCart } from 'hooks';
import useUITracker from 'store/uitracker';

const ProductDetails = ({ product }) => {
  const { addToCart } = useCart();
  const { setShowCart } = useUITracker();

  const handleAddToCart = async () => {
    await addToCart(product.id, 1);
    setShowCart(true);
  };

  return (
    <Section>
      <Grid columns={['8rem', 1, 1]} gap={2} sx={{ gridAutoRows: '78vh' }}>
        <Stack gap={2} sx={{ overflow: 'auto' }}>
          {new Array(4).fill('#').map((_, idx) => (
            <ImageTile key={idx} src={product.image.url} alt={idx + 1} />
          ))}
        </Stack>

        <figure>
          <MainImage src={product.image.url} alt={product.image.id} />
        </figure>

        <Stack gap={3} paddingLeft='1rem' paddingRight='1rem'>
          <Heading variant='secondary'>{product.name}</Heading>

          <div>
            <Typography>{product.price.formatted_with_symbol}</Typography>
            <Typography variant='body2'>
              Price is inclusive of shipping and all other taxes!🥳
            </Typography>
          </div>

          <Divider />

          <Stack gap={1}>
            <Typography>Size</Typography>
            <Stack direction='row' gap={1}>
              {(
                product.variant_groups.find(group => group.name.toLowerCase() === 'size')
                  ?.options || []
              ).map(variant => (
                <SizeButton variant='outlined' key={variant.id} size='small'>
                  {variant.name}
                </SizeButton>
              ))}
            </Stack>
          </Stack>

          <Stack gap={1}>
            <Typography>Quantity</Typography>
          </Stack>

          <Stack gap={1}>
            <Button variant='contained' onClick={handleAddToCart}>
              add to cart
            </Button>
            <Button variant='outlined'>Buy now</Button>
          </Stack>

          <p dangerouslySetInnerHTML={{ __html: product.description }} />
        </Stack>
      </Grid>
    </Section>
  );
};
export default ProductDetails;

const MainImage = styled('img')(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.borderRadius.tiny,
}));

const ImageTile = styled('img')(({ theme }) => ({
  height: '7rem',
  objectFit: 'cover',
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.borderRadius.tiny,
  width: '100%',
}));

const SizeButton = styled(Button)(({ theme }) => ({
  width: '2.2rem',
  height: '2.2rem',
  minWidth: 0,
  padding: theme.spacing(1, 2),
  fontSize: '.7rem',
}));
