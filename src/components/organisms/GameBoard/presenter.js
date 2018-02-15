import React from 'react';

// import Components
import Div from '../../atoms/Div';
import Square from '../../molecules/Square';

const GameBoard = ({ gameStatus }) => (
  <Div styleNames={['MY__GameBoard']}>
    {gameStatus.map((value, index) => <Square mark={value} key={index} />)}
  </Div>
);

export default GameBoard;