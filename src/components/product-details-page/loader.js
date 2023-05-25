import React from 'react';
import { Box, Skeleton, Stack } from '@mui/material';

import { Grid, Section } from 'ui';

const Loader = () => (
  <Section>
    <Grid columns={['8rem', 1, 1]} gap={2} sx={{ gridAutoRows: '78vh' }}>
      <Stack gap={2}>
        {new Array(4).fill('#').map((_, idx) => (
          <Skeleton key={idx} variant='rectangular' height='7rem' />
        ))}
      </Stack>

      <Skeleton variant='rectangular' height='100%' />

      <Stack gap={3} paddingLeft='1rem' paddingRight='1rem'>
        <Skeleton variant='rectangular' height='4rem' />
        <Skeleton variant='rectangular' height='2.5rem' />
        <Skeleton variant='rectangular' />

        <Box mt='auto'>
          <Skeleton height='3rem' />
          <Skeleton height='3rem' />
        </Box>
      </Stack>
    </Grid>
  </Section>
);

export default Loader;
