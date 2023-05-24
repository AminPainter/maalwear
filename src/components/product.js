import React from 'react';
import { Link } from 'gatsby';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import { Icon, Heading } from 'ui';

const Product = ({ id, name, price, image, alt, sizeVariants }) => {
  const handleShare = () => {
    navigator.share({
      url: `${window.location.protocol}//${window.location.host}/products/${id}`,
    });
  };

  return (
    <ProductCard>
      <Link to={`/products/${id}`}>
        <ProductImageWrapper>
          <ProductImage component='img' image={image} title={alt} />
        </ProductImageWrapper>

        <CardContent sx={{ pb: '0 !important' }}>
          <Heading gutterBottom variant='h5'>
            {name}
          </Heading>
          <Typography variant='body2' color='text.secondary'>
            {price}
          </Typography>
        </CardContent>
      </Link>

      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Stack direction='row'>
          {sizeVariants.map(variant => (
            <SizeButton
              key={variant.id}
              component={Link}
              to={`/products/${id}?size=${variant.name}`}
              size='small'>
              {variant.name}
            </SizeButton>
          ))}
        </Stack>

        <IconButton onClick={handleShare}>
          <Icon name='Share2' />
        </IconButton>
      </CardActions>
    </ProductCard>
  );
};

export default Product;

const ProductCard = styled(Card)(({ theme }) => ({
  transition: 'all .3s',

  '&:hover': {
    transform: 'translateY(-0.8rem)',
    boxShadow: theme.shadows[15],
  },

  '&:hover img': {
    transform: 'scale(1.2)',
  },
}));

const ProductImageWrapper = styled('figure')({
  height: '20rem',
  overflow: 'hidden',
});

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.primary.light,
  transition: 'all .3s',
}));

const SizeButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  width: 'min-content',
  padding: theme.spacing(1, 2),
}));
