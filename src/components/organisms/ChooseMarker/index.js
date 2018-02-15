import React from 'react';

// import Components
import Div from '../../atoms/Div';
import ChooseMarkerLabel from '../../molecules/ChooseMarkerLabel';
import ChooseMarkerForm from '../../molecules/ChooseMarkerForm';

const ChooseMarker = () => (
  <Div>
    <ChooseMarkerLabel />
    <ChooseMarker />
  </Div>
);

export default ChooseMarker;