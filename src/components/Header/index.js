import React from 'react';

const Header = ({ title, handleChangeTitle }) => (
  <div
    style={{
      background: title === 'Facebook Timeline' ? '#4267b2' : '#000000',
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
        <span
          onClick={() =>
            handleChangeTitle(
              title === 'Facebook Timeline'
                ? 'Pie of Life'
                : 'Facebook Timeline',
            )
          }
          style={{
            float: 'right',
            cursor: 'pointer',
            padding: '1px 5px',
            border: '1px solid #DDDFE2',
            borderRadius: '5px',
          }}
        >
          {title === 'Facebook Timeline' ? 'Pie of Life' : 'Facebook Timeline'}
        </span>
      </h3>
    </div>
  </div>
);

export default Header;
