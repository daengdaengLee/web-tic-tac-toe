import React from 'react';
import PropTypes from 'prop-types';

// import HOCs
import withValidStyleNames from '../../../hoc/withValidStyleNames';

// import Utils
import makeClassName from '../../../utils/makeClassName';

// import CSS
import './index.css';

const Temp = ({ children, styleNames, onClick }) => (
  <span
    className={makeClassName(styleNames)}
    onClick={onClick}
  >
    {children}
  </span>
);

const validStyleNames = [
  'My__Square',
  'Square__0',
  'Square__1',
  'Square__2',
  'Square__3',
  'Square__4',
  'Square__5',
  'Square__6',
  'Square__7',
  'Square__8',
];

const Span = withValidStyleNames(validStyleNames)(Temp);

Span.propTypes = {
  children: PropTypes.node,
  styleNames: PropTypes.arrayOf(PropTypes.oneOf(validStyleNames)),
  onClick: PropTypes.func,
};

export default Span;