import React from 'react';
import PropTypes from 'prop-types'

const H = ({ headingName, children }) => {
  const MyHeading = headingName;
  return (
    <MyHeading>
      {children}
    </MyHeading>
  );
}

H.propTypes = {
  children: PropTypes.node.isRequired,
  headingName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
};

export default H;