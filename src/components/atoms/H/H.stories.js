import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import H from './index';

storiesOf('H', module)
.add('h1', () => (
  <H headingName="h1">
    this is a h1 heading.
  </H>
))
.add('h2', () => (
  <H headingName="h2">
    this is a h2 heading.
  </H>
))
.add('h3', () => (
  <H headingName="h3">
    this is a h3 heading.
  </H>
))
.add('h4', () => (
  <H headingName="h4">
    this is a h4 heading.
  </H>
))
.add('h5', () => (
  <H headingName="h5">
    this is a h5 heading.
  </H>
))
.add('h6', () => (
  <H headingName="h6">
    this is a h6 heading.
  </H>
));