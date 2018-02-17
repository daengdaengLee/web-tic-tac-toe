import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ChooseMarkerForm from './presenter';

storiesOf('ChooseMarkerForm', module)
.add('ChooseMarkerForm Component', () => <ChooseMarkerForm
  chooseMarker={marker => console.log(marker)}
/>);