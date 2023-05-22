import { useQuery } from 'react-query';

import commerce from 'config/commerce';
import { queryKeys } from 'utils/app-constants';

const useProducts = () => {
  const { data, isLoading } = useQuery(queryKeys.getAllProducts, () => commerce.products.list());

  return { products: data?.data, isLoading };
};

export default useProducts;
