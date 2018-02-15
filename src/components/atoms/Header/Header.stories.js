import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from './index';

storiesOf('Header', module)
.add('Header Component', () => (
  <Header>
    this is a header tag.
  </Header>
));