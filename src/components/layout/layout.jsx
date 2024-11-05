// src/components/Layout.js
import React from 'react';
import NavBar from '../navbar/navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
