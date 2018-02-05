import React from 'react';
import Helmet from 'react-helmet';

import Header from './components/Header';

const Layout = ({ children }) => (
  <div>
    <Helmet title="HUME 10 Facebook Timeline" />
    <Header title="Facebook Timeline" />
    <div
      style={{
        backgroundColor: '#E9EBEE',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
        }}
      >
        <div style={{ paddingTop: '3rem' }}>{children}</div>
      </div>
    </div>
  </div>
);

export default Layout;
