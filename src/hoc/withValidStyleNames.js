import React from 'react';

// import HOCs
import withValidProps from './withValidProps';

// import Utils
import validateStyleNames from '../utils/validateStyleNames';

const withValidStyleNames = validStyleNames => Comp => {
  const validator = validateStyleNames(validStyleNames);
  return withValidProps(validator)(Comp);
};

export default withValidStyleNames;