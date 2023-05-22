import React from 'react';

import { useProducts } from 'hooks';
import Product from 'components/product';
import { Grid, Section } from 'ui';

const ProductList = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <>Loading</>;

  if (!products) return <>Error</>;

  return (
    <Section heading='new arrivals'>
      <Grid>
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price.formatted_with_symbol}
            image={product.image.url}
            alt={product.image.id}
            sizeVariants={
              product.variant_groups.find(group => group.name.toLowerCase() === 'size')?.options ||
              []
            }
          />
        ))}
      </Grid>
    </Section>
  );
};

export default ProductList;
