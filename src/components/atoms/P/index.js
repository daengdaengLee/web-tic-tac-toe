import React from 'react';
import PropTypes from 'prop-types';

// import HOCs
import withValidStyleNames from '../../../hoc/withValidStyleNames';

// import Utils
import makeClassName from '../../../utils/makeClassName';

// import CSS
import './index.css';

const Temp = ({ children, styleNames }) => <p className={makeClassName(styleNames)}>{children}</p>;

const validStyleNames = ['Horizontal__Center'];

const P = withValidStyleNames(validStyleNames)(Temp);

P.propTypes = {
  children: PropTypes.node.isRequired,
  styleNames: PropTypes.arrayOf(PropTypes.oneOf(validStyleNames)),
};

export default P;