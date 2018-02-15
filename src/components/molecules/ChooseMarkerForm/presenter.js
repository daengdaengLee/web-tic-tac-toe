import React from 'react';
import PropTypes from 'prop-types';

// import Components
import Button from '../../atoms/Button';
import Div from '../../atoms/Div';

const MarkerX = ({ chooseMarker }) => <Button onClick={() => chooseMarker('X')}>X</Button>;
const MarkerY = ({ chooseMarker }) => <Button onClick={() => chooseMarker('O')}>O</Button>;

const ChooseMarkerForm = ({ chooseMarker }) => (
  <Div>
    <MarkerX chooseMarker={chooseMarker} />
    or
    <MarkerY chooseMarker={chooseMarker} />
  </Div>
);

ChooseMarkerForm.propTypes = {
  chooseMarker: PropTypes.func.isRequired,
};

export default ChooseMarkerForm;