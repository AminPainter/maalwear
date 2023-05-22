import { useQuery, useQueryClient } from 'react-query';

import commerce from 'config/commerce';
import { queryKeys } from 'utils/app-constants';
import { useCallback } from 'react';

const useCart = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(queryKeys.getCart, () => commerce.cart.retrieve());

  const addToCart = useCallback(
    async (productId, quantity) => {
      await commerce.cart.add(productId, quantity);

      queryClient.invalidateQueries({
        queryKey: [queryKeys.getCart],
        exact: true,
      });
    },
    [queryClient]
  );

  return { cart: data, isCartLoading: isLoading, addToCart };
};

export default useCart;
