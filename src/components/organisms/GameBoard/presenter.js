import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Div from '../../atoms/Div';
import Square from '../../molecules/Square';
import DisplayMarker from '../../molecules/DisplayMarker';

const GameBoard = ({ gameStatus }) => (
  <Div>
    <DisplayMarker />
    <Div styleNames={['MY__GameBoard']}>
      {gameStatus.map((value, index) => <Square mark={value} key={index} />)}
    </Div>
  </Div>
);

GameBoard.propTypes = {
  gameStatus: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', ''])).isRequired,
};

export default GameBoard;