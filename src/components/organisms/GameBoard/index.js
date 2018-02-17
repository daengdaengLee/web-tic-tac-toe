import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import Action Creators
import { selectSquare } from '../../../ducks/games';

// import presenter Component
import GameBoard from './presenter';

function mapStateToProps(state) {
  return { gameStatus: state.gameStatus };
}

function mapDispatchToProps(dispatch) {
  return { selectSquare: bindActionCreators(selectSquare, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);