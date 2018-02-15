import { connect } from 'react-redux';

// import presenter Component
import DisplayMarker from './presenter';

function mapStateToProps(state) {
  const { playerMarker, computerMarker } = state;
  return { playerMarker, computerMarker };
}

export default connect(mapStateToProps)(DisplayMarker);