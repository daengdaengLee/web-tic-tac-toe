import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ children }) => <span>{children}</span>;

Span.propTypes = {
  children: PropTypes.node,
};

export default Span;