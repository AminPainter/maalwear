import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Stack, Step, StepLabel, Stepper, styled } from '@mui/material';

import commerce from 'config/commerce';
import SiteSeo from 'components/seo';
import { useCart } from 'hooks';
import { Icon } from 'ui';
import { AddressForm, CustomerForm } from 'components/checkout-page';

const steps = ['Customer Information', 'Shipping Address', 'Payment'];

const CheckoutPage = () => {
  const { cart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [checkoutDetails, setCheckoutDetails] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     if (!cart?.line_items.length) return;

  //     const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
  //     setToken(token);
  //   })();
  // }, [cart]);

  return (
    <Stack height='85vh' justifyContent='center'>
      <CheckoutContainer>
        <Box minHeight='5.5vh'>
          {currentStep !== 0 && (
            <Button
              onClick={() => setCurrentStep(currentStep - 1)}
              startIcon={<Icon name='ArrowLeft' />}>
              back
            </Button>
          )}
        </Box>

        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Stack alignItems='center' paddingTop={7}>
          {(() => {
            switch (currentStep) {
              case 0:
                return (
                  <CustomerForm
                    checkoutDetails={checkoutDetails}
                    setCheckoutDetails={setCheckoutDetails}
                    setCurrentStep={setCurrentStep}
                  />
                );
              case 1:
                return <AddressForm setCheckoutDetails={setCheckoutDetails} />;
              default:
                return <></>;
            }
          })()}
        </Stack>
      </CheckoutContainer>
    </Stack>
  );
};

export default CheckoutPage;

export const Head = () => <SiteSeo title='Checkout' />;

const CheckoutContainer = styled(Container)(({ theme }) => ({
  width: '70vw',
  minHeight: '60vh',
  boxShadow: theme.shadows[12],
  borderRadius: theme.borderRadius.tiny,
  padding: theme.spacing(3, 5, 10),
}));
