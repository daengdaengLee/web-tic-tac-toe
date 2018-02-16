import { connect } from 'react-redux';

// import presenter Component
import DisplayWinnerPresenter from './presenter';

function mapStateToProps(state) {
  return { winner: state.winner };
}

export default connect(mapStateToProps)(DisplayWinnerPresenter);