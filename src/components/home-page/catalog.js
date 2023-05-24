import React from 'react';

import ProductList from 'components/product-list';
import { Section } from 'ui';
import { useProducts } from 'hooks';

const Catalog = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <>Loading</>;

  if (!products) return <>Error</>;

  return (
    <Section heading='new arrivals'>
      <ProductList products={products} />
    </Section>
  );
};

export default Catalog;
