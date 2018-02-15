import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Action Creators
import { chooseMarker } from '../../../ducks/games';

// import presenter Component
import ChooseMarker from './presenter';

function mapDispatchToProps(dispatch) {
  return {
    chooseMarker: bindActionCreators(chooseMarker, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(ChooseMarker);