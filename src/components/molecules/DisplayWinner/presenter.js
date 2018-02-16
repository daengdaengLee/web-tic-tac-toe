import React from 'react';
import PropTypes from 'prop-types';

// import Components
import P from '../../atoms/P';

const DisplayWinnerPresenter = ({ winner }) => <P>Winner is {winner}!</P>;

DisplayWinnerPresenter.propTypes = {
  winner: PropTypes.string.isRequired,
};

export default DisplayWinnerPresenter;