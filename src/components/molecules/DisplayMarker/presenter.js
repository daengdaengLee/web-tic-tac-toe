import React from 'react';
import PropTypes from 'prop-types';

// import Components
import P from '../../atoms/P';

const DisplayMarker = ({
  playerMarker,
  computerMarker,
}) => <P>player: {playerMarker}, computer: {computerMarker}</P>;

DisplayMarker.propTypes = {
  playerMarker: PropTypes.string.isRequired,
  computerMarker: PropTypes.string.isRequired,
};

export default DisplayMarker;