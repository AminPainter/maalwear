import React, { useEffect, useState } from 'react';
import { Container, Stack, Step, StepLabel, Stepper, styled } from '@mui/material';

import commerce from 'config/commerce';
import { useCart } from 'hooks';
import { AddressForm, CustomerForm } from 'components/checkout-page';
import SiteSeo from 'components/seo';

const steps = ['Customer Information', 'Shipping Address', 'Payment'];

const CheckoutPage = () => {
  const { cart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [token, setToken] = useState();

  useEffect(() => {
    (async () => {
      if (!cart?.line_items.length) return;

      const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
      setToken(token);
    })();
  }, [cart]);

  return (
    <Stack height='85vh' justifyContent='center'>
      <CheckoutContainer>
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
                return <CustomerForm />;
              case 1:
                return <AddressForm />;
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
  padding: theme.spacing(3, 5),
}));
