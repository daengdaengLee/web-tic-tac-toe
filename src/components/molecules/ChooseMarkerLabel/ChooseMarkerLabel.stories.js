import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ChooseMarkerLabel from './index';

storiesOf('ChooseMarkerLabel', module)
.add('ChooseMarkerLabel Component', () => <ChooseMarkerLabel />);