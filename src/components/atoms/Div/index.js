import React from 'react';
import PropTypes from 'prop-types';

// import HOCs
import withValidStyleNames from '../../../hoc/withValidStyleNames';

// import Utils
import makeClassName from '../../../utils/makeClassName';

// import CSS
import './index.css';

const Temp = ({
  children,
  styleNames,
}) => <div className={makeClassName(styleNames)}>{children}</div>;

const validStyleNames = [
  'MY__GameBoard',
  'Horizontal__Center',
];

const Div = withValidStyleNames(validStyleNames)(Temp);

Div.propTypes = {
  children: PropTypes.node,
  styleNames: PropTypes.arrayOf(PropTypes.oneOf(validStyleNames)),
};

export default Div;