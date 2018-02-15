import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MainHeader from './index';

storiesOf('MainHeader', module)
.add('MainHeader Component', () => <MainHeader />);