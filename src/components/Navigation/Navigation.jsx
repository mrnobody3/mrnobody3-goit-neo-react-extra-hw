import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';

const Navigation = () => (
  <ButtonGroup variant="text" color="inherit">
    <Button component={NavLink} to="/">
      Home
    </Button>
    <Button component={NavLink} to="/contacts">
      Contacts
    </Button>
  </ButtonGroup>
);

export default Navigation;
