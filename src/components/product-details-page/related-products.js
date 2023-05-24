import React from 'react';

import ProductList from 'components/product-list';
import { Section } from 'ui';

const RelatedProducts = ({ relatedProducts }) => (
  <Section heading='You might also like'>
    <ProductList products={relatedProducts} />
  </Section>
);

export default RelatedProducts;
