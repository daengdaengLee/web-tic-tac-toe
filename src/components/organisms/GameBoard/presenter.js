import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Div from '../../atoms/Div';
import Square from '../../molecules/Square';

const GameBoard = ({ gameStatus }) => (
  <Div styleNames={['MY__GameBoard']}>
    {gameStatus.map((value, index) => <Square mark={value} key={index} />)}
  </Div>
);

GameBoard.propTypes = {
  gameStatus: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', ''])).isRequired,
};

export default GameBoard;