import React from 'react';

const Header = ({ title }) => (
  <div
    style={{
      background: '#4267b2',
      marginBottom: '1rem',
      position: 'fixed',
      width: '100vw',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.5rem 1.0875rem',
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png"
        alt="facebook logo"
        style={{ height: 20, width: 20, margin: 0 }}
      />
      <h3
        style={{
          margin: 0,
          display: 'inline',
          paddingLeft: 10,
          color: 'white',
          textDecoration: 'none',
        }}
      >
        HUME 10 {title}
      </h3>
    </div>
  </div>
);

export default Header;
