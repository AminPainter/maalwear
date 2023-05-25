import { useQuery, useQueryClient } from 'react-query';

import commerce from 'config/commerce';
import { queryKeys } from 'utils/app-constants';
import { useCallback } from 'react';

const useCart = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(queryKeys.getCart, () => commerce.cart.retrieve());

  const addToCart = useCallback(
    async (productId, quantity) => {
      const { cart: updatedCart } = await commerce.cart.add(productId, quantity);
      queryClient.setQueryData(queryKeys.getCart, updatedCart);
    },
    [queryClient]
  );

  const updateCartItemQuantity = useCallback(
    async (lineItemId, quantity) => {
      const { cart: updatedCart } = await commerce.cart.update(lineItemId, { quantity });
      queryClient.setQueryData(queryKeys.getCart, updatedCart);
    },
    [queryClient]
  );

  return { cart: data, isCartLoading: isLoading, addToCart, updateCartItemQuantity };
};

export default useCart;
