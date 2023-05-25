import React from 'react';
import { Formik } from 'formik';
import { Button, Stack, TextField } from '@mui/material';

import { Grid, Heading, Icon } from 'ui';

const CustomerForm = ({ checkoutDetails, setCheckoutDetails, setCurrentStep }) => {
  const initialValues = {
    firstName: checkoutDetails.firstName,
    lastName: checkoutDetails.lastName,
    email: checkoutDetails.email,
  };

  const handleSubmit = values => {
    setCheckoutDetails(prevDetails => ({
      ...prevDetails,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    }));

    setCurrentStep(prevStep => prevStep + 1);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formik => (
        <Stack gap={2} width='50%' component='form' onSubmit={formik.handleSubmit}>
          <Heading textAlign='center' variant='secondary'>
            customer information
          </Heading>

          <Grid columns={2} gap={2}>
            <TextField
              name='firstName'
              label='First Name'
              variant='outlined'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />

            <TextField
              name='lastName'
              label='Last Name'
              variant='outlined'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />

            <TextField
              type='email'
              name='email'
              label='Email Address'
              variant='outlined'
              sx={{ gridColumn: '1 / -1' }}
              value={formik.values.email}
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

export default CustomerForm;
