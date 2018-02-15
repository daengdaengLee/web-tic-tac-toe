import React from 'react';

// import Components
import P from '../../atoms/P';

const DisplayMarker = ({
  playerMarker,
  computerMarker,
}) => <P>player: {playerMarker}, computer: {computerMarker}</P>;

export default DisplayMarker;