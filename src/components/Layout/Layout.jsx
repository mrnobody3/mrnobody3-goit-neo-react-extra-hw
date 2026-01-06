import React from 'react';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => (
  <div>
    <AppBar />
    <main>{children}</main>
  </div>
);

export default Layout;
