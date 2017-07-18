import React, { PropTypes } from 'react';

const Description = ({ children, className }) => (
  <span className={`typography description ${className}`}>{children}</span>
);

Description.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

Description.defaultProps = {
  className: ''
};

export default Description;
