import React from 'react';
import { Box, styled } from '@mui/material';

const Grid = ({ children, columns = 3, gap = 5.5, ...rest }) => (
  <CustomGrid columns={columns} gap={gap} {...rest}>
    {children}
  </CustomGrid>
);

export default Grid;

const CustomGrid = styled(Box)(({ theme, columns, gap }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: theme.spacing(gap),
}));
