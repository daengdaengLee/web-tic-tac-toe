import React from 'react';

// import Components
import Button from '../../atoms/Button';
import Div from '../../atoms/Div';

const MarkerX = ({ chooseMarker }) => <Button onClick={() => chooseMarker('X')}>X</Button>;
const MarkerY = ({ chooseMarker }) => <Button onClick={() => chooseMarker('O')}>O</Button>;

const ChooseMarker = ({ chooseMarker }) => (
  <Div>
    <MarkerX chooseMarker={chooseMarker} />
    or
    <MarkerY chooseMarker={chooseMarker} />
  </Div>
);

export default ChooseMarker;