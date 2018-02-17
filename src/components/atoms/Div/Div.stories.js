import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Div from './index';
import H from '../H';

storiesOf('Div', module)
.add('Div Component', () => (
  <Div>
    this is a div.
    <H headingName="h1">
      this is a h1 heading.
    </H>
  </Div>
))
.add('Div Component with styleNames 1', () => (
  <Div styleNames={['MY__GameBoard']}>
    this is a Div Comp with styleNames.
  </Div>
))
.add('Div Component with styleNames 2', () => (
  <Div styleNames={['MY__GameB']}>
    this is a Div Comp with styleNames.
  </Div>
));