import React from 'react';
import { Typography, styled } from '@mui/material';

const Heading = ({ variant = 'primary', children, ...rest }) => {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryTypography variant='h2' {...rest}>
          {children}
        </PrimaryTypography>
      );

    default:
      return (
        <BaseTypography variant='h6' {...rest}>
          {children}
        </BaseTypography>
      );
  }
};

export default Heading;

const BaseTypography = styled(Typography)({
  textTransform: 'capitalize',
});

const PrimaryTypography = styled(BaseTypography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  justifyContent: 'center',

  '&::before, &::after': {
    content: '""',
    width: '4rem',
    height: '3px',
    borderRadius: '1rem',
    backgroundColor: theme.palette.primary.main,
  },
}));
