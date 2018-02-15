import React from 'react';
import PropTypes from 'prop-types';

// import Components
import H from '../../atoms/H';

const MainTitle = ({ children }) => <H headingName="h1">{children}</H>;

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTitle;