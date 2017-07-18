import React, { PropTypes } from 'react';

const Label = ({ children, className }) => (
  <label className={`typography label ${className}`}>{children}</label>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

Label.defaultProps = {
  className: ''
};

export default Label;
