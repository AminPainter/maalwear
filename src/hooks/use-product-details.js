import { useQuery } from 'react-query';

import commerce from 'config/commerce';
import { queryKeys } from 'utils/app-constants';

const useProductDetails = id => {
  const { data: product, isLoading } = useQuery([queryKeys.getProduct, id], () =>
    commerce.products.retrieve(id)
  );

  return { product, isLoading };
};

export default useProductDetails;
