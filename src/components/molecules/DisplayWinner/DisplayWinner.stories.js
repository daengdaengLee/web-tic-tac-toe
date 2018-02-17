import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DisplayWinnerPresenter from './presenter';

storiesOf('DisplayWinnerPresenter', module)
.add('DisplayWinnerPresenter Component', () => <DisplayWinnerPresenter
  winner="player"
/>);