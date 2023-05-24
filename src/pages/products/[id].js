import React from 'react';

import { ProductDetails } from 'components/product-details-page';

const ProductDetailPage = ({ params }) => (
  <>
    <ProductDetails id={params.id} />
  </>
);

export default ProductDetailPage;
