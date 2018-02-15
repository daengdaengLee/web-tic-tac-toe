import React from 'react';
import PropTypes from 'prop-types';

const Div = ({ children }) => <div>{children}</div>;

Div.propTypes = {
  children: PropTypes.node,
};

export default Div;