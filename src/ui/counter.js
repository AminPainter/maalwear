import React from 'react';
import { Button, Stack, styled } from '@mui/material';

const Counter = ({ count, handleChange, minCount = -Infinity, maxCount = Infinity }) => {
  const handleCountChange = factor => () => {
    handleChange(count + factor);
  };

  return (
    <CounterContainer>
      <CounterButton disabled={count === minCount} onClick={handleCountChange(-1)}>
        -
      </CounterButton>

      <CounterDisplay>{count}</CounterDisplay>

      <CounterButton disabled={count === maxCount} onClick={handleCountChange(+1)}>
        +
      </CounterButton>
    </CounterContainer>
  );
};

export default Counter;

const CounterContainer = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  width: 'max-content',
  flexDirection: 'row',
}));

const CounterButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  height: '2rem',
  width: '2rem',
  borderRadius: 0,
}));

const CounterDisplay = styled('div')(({ theme }) => ({
  height: '2rem',
  width: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderLeft: `1px solid ${theme.palette.grey[300]}`,
  borderRight: `1px solid ${theme.palette.grey[300]}`,
}));
