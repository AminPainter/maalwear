import { Box, styled } from '@mui/material';

const Grid = styled(Box)(({ theme, columns = 3, gap = 5.5 }) => {
  return {
    display: 'grid',
    gridTemplateColumns:
      typeof columns === 'object'
        ? columns.map(col => (typeof col === 'number' ? `${col}fr` : col)).join(' ')
        : `repeat(${columns}, 1fr)`,
    gap: theme.spacing(gap),
  };
});

export default Grid;
