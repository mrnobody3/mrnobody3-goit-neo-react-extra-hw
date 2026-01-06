import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectAuth } from '../../redux/auth/selectors';
import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => dispatch(logout());

  return (
    <div>
      <IconButton color="inherit" onClick={handleMenuOpen}>
        <Avatar>
          {auth.user?.name ? auth.user.name[0].toUpperCase() : '?'}
        </Avatar>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem disabled>
          <Typography>{auth.user?.email}</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleLogout();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
