import React, { PropTypes } from 'react';

const Box = ({ children, className }) => (
  <div className={`grid box ${className}`}>{children}</div>
);

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string
};

Box.defaultProps = {
  className: '',
  children: null
};

export default Box;
