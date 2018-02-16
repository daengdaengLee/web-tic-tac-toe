import { connect } from 'react-redux';

// import presenter Component
import GamePagePresenter from './presenter';

function mapStateToProps(state) {
  return { gameProcess: state.gameProcess };
}

export default connect(mapStateToProps)(GamePagePresenter);