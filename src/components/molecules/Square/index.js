import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Span from '../../atoms/Span';

const Square = ({ mark, id, selectSquare }) => (
  <Span
    styleNames={['My__Square', `Square__${id}`]}
    onClick={() => selectSquare(id)}
  >
    {mark}
  </Span>
);

Square.propTypes = {
  mark: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selectSquare: PropTypes.func.isRequired,
};

export default Square;