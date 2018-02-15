import { connect } from 'react-redux';

// import presenter Component
import GameBoard from './presenter';

function mapStateToProps(state) {
  return { gameStatus: state.gameStatus };
}

export default connect(mapStateToProps)(GameBoard);