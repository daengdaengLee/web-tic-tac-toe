import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Div from '../../atoms/Div';

const GameTemplate = ({ header, gameDisplay }) => (
  <Div>
    {header}
    {gameDisplay}
  </Div>
);

GameTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  gameDisplay: PropTypes.node.isRequired,
};

export default GameTemplate;