import React from 'react';
import { Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AuthNav = () => (
  <Stack direction="row" spacing={1}>
    <Button component={RouterLink} to="/register" color="inherit">
      Register
    </Button>
    <Button component={RouterLink} to="/login" color="inherit">
      Login
    </Button>
  </Stack>
);

export default AuthNav;
