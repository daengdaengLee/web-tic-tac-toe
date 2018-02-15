import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DisplayMarker from './presenter';

storiesOf('DisplayMarker', module)
.add('DisplayMarker Component', () => <DisplayMarker
  playerMarker="X"
  computerMarker="O"
/>);