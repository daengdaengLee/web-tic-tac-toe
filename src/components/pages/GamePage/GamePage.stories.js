import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import StorybookProvider from '../../../utils/StorybookProvider';

import GamePage from './index';

storiesOf('GamePage', module)
.addDecorator(story => <StorybookProvider story={story()} />)
.add('GamePage Component', () => <GamePage />);