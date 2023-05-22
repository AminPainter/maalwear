import React from 'react';
import { Container, Box } from '@mui/material';

import Heading from './heading';

const Section = ({ children, heading }) => (
  <Box component='section' py={4}>
    <Container maxWidth='lg'>
      {heading && <Heading mb={4}>{heading}</Heading>}
      {children}
    </Container>
  </Box>
);

export default Section;
