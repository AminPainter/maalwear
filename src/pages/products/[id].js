import React from 'react';

import { ProductDetails, RelatedProducts } from 'components/product-details-page';
import { useProductDetails } from 'hooks';

const ProductDetailPage = ({ params }) => {
  const { product, isLoading } = useProductDetails(params.id);

  if (isLoading) return <>Loading</>;

  if (!product) return <>Error</>;

  return (
    <>
      <ProductDetails product={product} />
      <RelatedProducts relatedProducts={product.related_products} />
    </>
  );
};

export default ProductDetailPage;
