import { put, all, takeEvery } from 'redux-saga/effects';

// Actions
import { SELECT_SQUARE, COMPUTER_CALL, IS_PLAYER_WIN, IS_GAME_END } from './actions';

function* isPlayerWin() {
  yield put({ type: IS_PLAYER_WIN });
}

function* computerCall() {
  yield put({ type: COMPUTER_CALL });
}

function* isGameEnd() {
  yield put({ type: IS_GAME_END });
}

function* watchSeletSquare() {
  yield takeEvery(SELECT_SQUARE, isPlayerWin);
}

function* watchIsPlayerWin() {
  yield takeEvery(IS_PLAYER_WIN, computerCall);
}

function* watchIsGameEnd() {
  yield takeEvery(COMPUTER_CALL, isGameEnd);
}

function* mySaga() {
  yield all([
    watchSeletSquare(),
    watchIsPlayerWin(),
    watchIsGameEnd(),
  ]);
}

export default mySaga;