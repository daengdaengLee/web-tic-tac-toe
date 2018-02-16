import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Span from '../../atoms/Span';

const Square = ({ mark }) => <Span styleNames={['My__Square']}>{mark}</Span>;

Square.propTypes = {
  mark: PropTypes.string.isRequired,
};

export default Square;