import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ width, height, children, margin = 10, padding = 5 }) => (
  <div
    style={{
      width,
      height,
      background: 'white',
      borderRadius: 2.5,
      borderStyle: 'solid',
      borderColor: '#DDDFE2',
      borderWidth: 1,
      margin,
      padding,
    }}
  >
    {children}
  </div>
);

Box.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Box;
