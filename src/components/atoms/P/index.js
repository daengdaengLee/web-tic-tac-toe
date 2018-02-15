import React from 'react';
import PropTypes from 'prop-types';

const P = ({ children }) => <p>{children}</p>;

P.propTypes = {
  children: PropTypes.node.isRequired,
};

export default P;