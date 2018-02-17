import React from 'react';
import PropTypes from 'prop-types';

// import HOCs
import withValidStyleNames from '../../../hoc/withValidStyleNames';

// import Utils
import makeClassName from '../../../utils/makeClassName';

// import CSS
import './index.css';

const Temp = ({ children, styleNames }) => (
  <header
    className={makeClassName(styleNames)}
  >
    {children}
  </header>
);

const validStyleNames = ['Horizontal__Center'];

const Header = withValidStyleNames(validStyleNames)(Temp);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  styleNames: PropTypes.arrayOf(PropTypes.oneOf(validStyleNames)),
};

export default Header;