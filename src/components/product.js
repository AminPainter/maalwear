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
    <Card>
      <Link to={`/products/${id}`}>
        <ProductImage image={image} title={alt} />
        <CardContent>
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
    </Card>
  );
};

export default Product;

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: '20rem',
  width: '100%',
  objectFit: 'cover',
  backgroundColor: theme.palette.primary.light,
}));

const SizeButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  width: 'min-content',
  padding: theme.spacing(1, 2),
}));
