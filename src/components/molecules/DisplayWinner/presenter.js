import React from 'react';
import PropTypes from 'prop-types';

// import Components
import P from '../../atoms/P';

const DisplayWinnerPresenter = ({ winner }) => {
  if(winner === 'draw') return <P>Draw!</P>;
  return <P>Winner is {winner}!</P>;
};

DisplayWinnerPresenter.propTypes = {
  winner: PropTypes.string.isRequired,
};

export default DisplayWinnerPresenter;