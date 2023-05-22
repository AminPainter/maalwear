import React from 'react';
import { Link } from 'gatsby';
import { AppBar, Badge, IconButton, Stack, styled } from '@mui/material';

import { Icon } from 'ui';
import { useCart } from 'hooks';
import logoImg from 'images/logo.png';

const Navigation = ({ setShowCart }) => {
  const { cart } = useCart();

  return (
    <NavBar position='fixed'>
      <IconButton>
        <Icon name='Menu' />
      </IconButton>

      <Link to='/'>
        <Logo src={logoImg} alt='LOGO' />
      </Link>

      <Stack direction='row' gap={1}>
        <IconButton>
          <Icon name='Search' />
        </IconButton>

        <IconButton onClick={setShowCart}>
          <Badge
            badgeContent={cart?.total_unique_items || 0}
            color='primary'
            sx={{ '& .MuiBadge-badge': { color: '#fff' } }}
            showZero>
            <Icon name='ShoppingCart' />
          </Badge>
        </IconButton>
      </Stack>
    </NavBar>
  );
};

export default Navigation;

const Logo = styled('img')({ width: '5rem' });

const NavBar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(0, 3),
}));
