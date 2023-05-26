import React from 'react';
import { Skeleton, Stack } from '@mui/material';

import ProductList from 'components/product-list';
import { Section, Grid } from 'ui';
import { useProducts } from 'hooks';

const CatalogLoader = () => (
  <Grid>
    {new Array(3).fill('$').map((_, idx) => (
      <Stack key={idx} gap={2}>
        <Skeleton variant='rectangular' height='20rem' />
        <Skeleton variant='rectangular' width='70%' />
        <Skeleton variant='rectangular' width='20%' />
        <Skeleton variant='rectangular' />
      </Stack>
    ))}
  </Grid>
);

const Catalog = () => {
  const { products, isLoading } = useProducts();

  return (
    <Section heading='new arrivals'>
      {isLoading ? <CatalogLoader /> : <ProductList products={products} />}
    </Section>
  );
};

export default Catalog;
