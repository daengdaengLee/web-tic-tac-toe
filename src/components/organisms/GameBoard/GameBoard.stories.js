import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import GameBoard from './presenter';

storiesOf('GameBoard', module)
.add('GameBoard Component', () => (
  <GameBoard gameStatus={['X', 'X', 'X', 'X', 'X', 'X', 'O', 'O', 'O']} />
));