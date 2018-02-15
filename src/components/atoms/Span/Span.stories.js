import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Span from './index';

storiesOf('Span', module)
.add('Span Component', () => (
  <Span>
    this is a span tag.
  </Span>
));