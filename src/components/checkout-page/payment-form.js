import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import { loadRazorpay, sanitizedLineItems } from 'utils/helpers';
import { Heading } from 'ui';
import commerce from 'config/commerce';
import logoImg from 'images/logo.png';

const PaymentForm = ({ checkoutDetails, setCheckoutDetails, setCurrentStep }) => {
  const [isRazorpayLoading, setIsRazorpayLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await loadRazorpay();
        setIsRazorpayLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handlePayment = useCallback(() => {
    if (isRazorpayLoading || !checkoutDetails.checkoutToken) return;

    const razorpayOptions = {
      key: 'rzp_test_D3oqRXsAIwldXW',
      amount: checkoutDetails.checkoutToken.live.subtotal.raw * 100,
      currency: checkoutDetails.checkoutToken.live.currency.code,
      name: 'Maalwear',
      description: 'Place your order now!',
      image: logoImg,
      prefill: {
        name: `${checkoutDetails.firstName} ${checkoutDetails.lastName}`,
        email: checkoutDetails.email,
      },
      theme: {
        color: '#dba13a',
      },

      handler: async response => {
        const orderData = {
          line_items: sanitizedLineItems(checkoutDetails.checkoutToken.live.line_items),
          customer: {
            firstName: checkoutDetails.firstName,
            lastName: checkoutDetails,
            email: checkoutDetails.email,
          },
          shipping: {
            street: checkoutDetails.shippingStreet,
            town_city: checkoutDetails.shippingCity,
            postal_zip_code: checkoutDetails.shippingPostalZipCode,
          },
          payment: {
            gateway: 'razorpay',
            razorpay: {
              payment_id: response.razorpay_payment_id,
            },
          },
        };

        await commerce.cart.refresh();

        try {
          await commerce.checkout.capture(checkoutDetails.checkoutToken.id, orderData);
        } catch (err) {
          console.log(err);
        }

        setCheckoutDetails({});
        setCurrentStep(prevStep => prevStep + 1);
      },
    };

    const paymentPortal = new window.Razorpay(razorpayOptions);
    paymentPortal.open();
  }, [isRazorpayLoading, checkoutDetails, setCheckoutDetails, setCurrentStep]);

  if (isRazorpayLoading || !checkoutDetails.checkoutToken)
    return (
      <Stack gap={3} alignItems='center'>
        <Heading variant='secondary'>Processing your request</Heading>
        <CircularProgress />
      </Stack>
    );

  return (
    <Box width='70%'>
      <Heading variant='secondary' mb={2}>
        order summary
      </Heading>

      <SummaryList>
        {checkoutDetails.checkoutToken.live.line_items.map(product => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <ProductImage src={product.image.url} alt={product.image.id} />
            </ListItemAvatar>
            <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
            <Typography>{product.line_total.foramtted_with_symbol}</Typography>
          </ListItem>
        ))}
      </SummaryList>

      <Stack mt={4} gap={2}>
        <Divider />
        <Stack direction='row' justifyContent='space-between'>
          <Typography fontWeight={700}>Total:</Typography>
          <Typography>
            {checkoutDetails.checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </Stack>
        <Button onClick={handlePayment} variant='contained'>
          Make payment
        </Button>
      </Stack>
    </Box>
  );
};

export default PaymentForm;

const SummaryList = styled(List)(({ theme }) => ({ height: '30vh', overflow: 'auto' }));

const ProductImage = styled('img')(({ theme }) => ({
  height: '5rem',
  marginRight: theme.spacing(3),
  backgroundColor: theme.palette.primary.light,
}));
