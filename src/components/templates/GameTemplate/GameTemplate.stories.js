import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Div from '../../atoms/Div';

import GameTemplate from './index';

storiesOf('GameTemplate', module)
.add('GameTemplate Component', () => <GameTemplate
  header={<Div>this is a header section.</Div>}
  gameDisplay={<Div>this is a game display section.</Div>}
/>);