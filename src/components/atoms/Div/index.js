import React from 'react';
import PropTypes from 'prop-types';

// import HOCs
import withValidProps from '../../../hoc/withValidProps';

// import Utils
import makeClassName from '../../../utils/makeClassName';
import validateStyleNames from '../../../utils/validateStyleNames';

// import CSS
import './index.css';

// define validator for styleNames prop
const validator = validateStyleNames(['MY__GameBoard']);

const Temp = ({
  children,
  styleNames,
}) => <div className={makeClassName(styleNames)}>{children}</div>;

const Div = withValidProps(validator)(Temp);

Div.propTypes = {
  children: PropTypes.node,
  styleNames: PropTypes.arrayOf(PropTypes.string),
};

export default Div;