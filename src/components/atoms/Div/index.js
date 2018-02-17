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

const Div = withValidStyleNames(['MY__GameBoard'])(Temp);

Div.propTypes = {
  children: PropTypes.node,
  styleNames: PropTypes.arrayOf(PropTypes.oneOf(['MY__GameBoard'])),
};

export default Div;