import React from 'react';
import { Formik } from 'formik';
import { Button, Stack, TextField } from '@mui/material';
import { Heading, Icon } from 'ui';

const CustomerForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
  };

  return (
    <Formik initialValues={initialValues}>
      {formik => (
        <Stack gap={2} width='50%' component='form' onSubmit={formik.handleSubmit}>
          <Heading textAlign='center' variant='secondary'>
            customer information
          </Heading>
          <TextField
            name='fullName'
            label='Full Name'
            variant='outlined'
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <TextField
            type='email'
            name='email'
            label='Email Address'
            variant='outlined'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

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
