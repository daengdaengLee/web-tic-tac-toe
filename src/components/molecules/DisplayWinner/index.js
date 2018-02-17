import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import Action Creator
import { restart } from '../../../ducks/games';

// import presenter Component
import DisplayWinnerPresenter from './presenter';

class DisplayWinner extends Component {

  render() {
    return <DisplayWinnerPresenter {...this.props} />
  }

  componentDidMount() {
    window.setTimeout(this.props.restart, 3000);
  }

}

function mapStateToProps(state) {
  return { winner: state.winner };
}

function mapDispatchToProps(dispatch) {
  return { restart: bindActionCreators(restart, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayWinner);