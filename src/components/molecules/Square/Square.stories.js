import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Square from './index';

storiesOf('Square', module)
.add('Square Component', () => (
  <Square id={3} selectSquare={console.log} mark="X" />
));