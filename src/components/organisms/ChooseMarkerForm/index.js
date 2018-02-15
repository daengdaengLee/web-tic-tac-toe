import React from 'react';

// import Components
import Div from '../../atoms/Div';
import ChooseMarkerLabel from '../../molecules/ChooseMarkerLabel';
import ChooseMarker from '../../molecules/ChooseMarker';

const ChooseMarkerForm = () => (
  <Div>
    <ChooseMarkerLabel />
    <ChooseMarker />
  </Div>
);

export default ChooseMarkerForm;