import React from 'react';
import PropTypes from 'prop-types';

// import Components
import MainHeader from '../../organisms/MainHeader';
import ChooseMarker from '../../organisms/ChooseMarker';
import GameBoard from '../../organisms/GameBoard';
import GameTemplate from '../../templates/GameTemplate';

const GamePagePresenter = ({ gameProcess }) => {
  let gameDisplay;
  switch(gameProcess) {
    case 'chooseMarker':
      gameDisplay = <ChooseMarker />;
      break;
    case 'isPlaying':
      gameDisplay = <GameBoard />;
      break;
    default: gameDisplay = 'No Game';
  }
  return <GameTemplate
    header={<MainHeader />}
    gameDisplay={gameDisplay}
  />;
};

GamePagePresenter.propTypes = {
  gameProcess: PropTypes.string.isRequired,
};

export default GamePagePresenter;