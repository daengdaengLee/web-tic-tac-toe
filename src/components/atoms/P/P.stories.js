import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import P from './index';

storiesOf('P', module)
.add('P Component', () => (
  <P>
    this is a p tag.
  </P>
));