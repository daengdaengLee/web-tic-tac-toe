import React from 'react';
import PropTypes from 'prop-types';

// import HOCs
import withValidStyleNames from '../../../hoc/withValidStyleNames';

// import Utils
import makeClassName from '../../../utils/makeClassName';

// import CSS
import './index.css';

const Temp = ({ children, styleNames }) => <span className={makeClassName(styleNames)}>{children}</span>;

const Span = withValidStyleNames(['My__Square'])(Temp);

Span.propTypes = {
  children: PropTypes.node,
  styleNames: PropTypes.arrayOf(PropTypes.oneOf(['My__Square'])),
};

export default Span;