import React from 'react';
import { Formik } from 'formik';
import { Button, Stack, TextField } from '@mui/material';
import { Grid, Heading, Icon } from 'ui';

const AddressForm = ({ checkoutDetails, setCheckoutDetails, setCurrentStep }) => {
  const initialValues = {
    shippingPostalZipCode: checkoutDetails.shippingPostalZipCode || '',
    shippingCity: checkoutDetails.shippingCity || '',
    shippingStreet: checkoutDetails.shippingStreet || '',
  };

  const handleSubmit = values => {
    setCheckoutDetails(prevDetails => ({
      ...prevDetails,
      shippingPostalZipCode: values.shippingPostalZipCode,
      shippingCity: values.shippingCity,
      shippingStreet: values.shippingStreet,
    }));

    setCurrentStep(prevStep => prevStep + 1);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formik => (
        <Stack gap={2} width='50%' component='form' onSubmit={formik.handleSubmit}>
          <Heading textAlign='center' variant='secondary'>
            shipping address
          </Heading>

          <Grid columns={2} gap={2}>
            <TextField
              name='shippingPostalZipCode'
              label='Postal / Zip Code'
              variant='outlined'
              value={formik.values.shippingPostalZipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />

            <TextField
              name='shippingCity'
              label='City'
              variant='outlined'
              value={formik.values.shippingCity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />

            <TextField
              name='shippingStreet'
              label='Street Address'
              variant='outlined'
              sx={{ gridColumn: '1 / -1' }}
              value={formik.values.shippingStreet}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
          </Grid>

          <Button
            type='submit'
            variant='contained'
            endIcon={<Icon name='ArrowRight' color='common.black' />}>
            Next step
          </Button>
        </Stack>
      )}
    </Formik>
  );
};

export default AddressForm;
