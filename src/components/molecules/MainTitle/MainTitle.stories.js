import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MainTitle from './index';

storiesOf('MainTitle', module)
.add('MainTitle Component', () => (
  <MainTitle>
    Tic Tac Toe
  </MainTitle>
));