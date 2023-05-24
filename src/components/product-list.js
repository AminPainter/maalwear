import React from 'react';

import Product from 'components/product';
import { Grid } from 'ui';

const ProductList = ({ products }) => (
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
          product.variant_groups.find(group => group.name.toLowerCase() === 'size')?.options || []
        }
      />
    ))}
  </Grid>
);

export default ProductList;
